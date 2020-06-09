import { Decimal } from "./decimal";

describe("Decimal", () => {
  describe("fromAtomics", () => {
    it("leads to correct atomics value", () => {
      expect(Decimal.fromAtomics("1", 0).atomics).toEqual("1");
      expect(Decimal.fromAtomics("1", 1).atomics).toEqual("1");
      expect(Decimal.fromAtomics("1", 2).atomics).toEqual("1");

      expect(Decimal.fromAtomics("1", 5).atomics).toEqual("1");
      expect(Decimal.fromAtomics("2", 5).atomics).toEqual("2");
      expect(Decimal.fromAtomics("3", 5).atomics).toEqual("3");
      expect(Decimal.fromAtomics("10", 5).atomics).toEqual("10");
      expect(Decimal.fromAtomics("20", 5).atomics).toEqual("20");
      expect(Decimal.fromAtomics("30", 5).atomics).toEqual("30");
      expect(Decimal.fromAtomics("100000000000000000000000", 5).atomics).toEqual("100000000000000000000000");
      expect(Decimal.fromAtomics("200000000000000000000000", 5).atomics).toEqual("200000000000000000000000");
      expect(Decimal.fromAtomics("300000000000000000000000", 5).atomics).toEqual("300000000000000000000000");

      expect(Decimal.fromAtomics("44", 5).atomics).toEqual("44");
      expect(Decimal.fromAtomics("044", 5).atomics).toEqual("44");
      expect(Decimal.fromAtomics("0044", 5).atomics).toEqual("44");
      expect(Decimal.fromAtomics("00044", 5).atomics).toEqual("44");
    });

    it("reads fractional digits correctly", () => {
      expect(Decimal.fromAtomics("44", 0).toString()).toEqual("44");
      expect(Decimal.fromAtomics("44", 1).toString()).toEqual("4.4");
      expect(Decimal.fromAtomics("44", 2).toString()).toEqual("0.44");
      expect(Decimal.fromAtomics("44", 3).toString()).toEqual("0.044");
      expect(Decimal.fromAtomics("44", 4).toString()).toEqual("0.0044");
    });
  });

  describe("fromUserInput", () => {
    it("throws helpful error message for invalid characters", () => {
      expect(() => Decimal.fromUserInput(" 13", 5)).toThrowError(/invalid character at position 1/i);
      expect(() => Decimal.fromUserInput("1,3", 5)).toThrowError(/invalid character at position 2/i);
      expect(() => Decimal.fromUserInput("13-", 5)).toThrowError(/invalid character at position 3/i);
      expect(() => Decimal.fromUserInput("13/", 5)).toThrowError(/invalid character at position 3/i);
      expect(() => Decimal.fromUserInput("13\\", 5)).toThrowError(/invalid character at position 3/i);
    });

    it("throws for more than one separator", () => {
      expect(() => Decimal.fromUserInput("1.3.5", 5)).toThrowError(/more than one separator found/i);
      expect(() => Decimal.fromUserInput("1..3", 5)).toThrowError(/more than one separator found/i);
      expect(() => Decimal.fromUserInput("..", 5)).toThrowError(/more than one separator found/i);
    });

    it("throws for separator only", () => {
      expect(() => Decimal.fromUserInput(".", 5)).toThrowError(/fractional part missing/i);
    });

    it("throws for more fractional digits than supported", () => {
      expect(() => Decimal.fromUserInput("44.123456", 5)).toThrowError(
        /got more fractional digits than supported/i,
      );
      expect(() => Decimal.fromUserInput("44.1", 0)).toThrowError(
        /got more fractional digits than supported/i,
      );
    });

    it("throws for fractional digits that are not non-negative integers", () => {
      // no integer
      expect(() => Decimal.fromUserInput("1", Number.NaN)).toThrowError(
        /fractional digits is not an integer/i,
      );
      expect(() => Decimal.fromUserInput("1", Number.POSITIVE_INFINITY)).toThrowError(
        /fractional digits is not an integer/i,
      );
      expect(() => Decimal.fromUserInput("1", Number.NEGATIVE_INFINITY)).toThrowError(
        /fractional digits is not an integer/i,
      );
      expect(() => Decimal.fromUserInput("1", 1.78945544484)).toThrowError(
        /fractional digits is not an integer/i,
      );

      // negative
      expect(() => Decimal.fromUserInput("1", -1)).toThrowError(/fractional digits must not be negative/i);
      expect(() => Decimal.fromUserInput("1", Number.MIN_SAFE_INTEGER)).toThrowError(
        /fractional digits must not be negative/i,
      );

      // exceeds supported range
      expect(() => Decimal.fromUserInput("1", 101)).toThrowError(/fractional digits must not exceed 100/i);
    });

    it("returns correct value", () => {
      expect(Decimal.fromUserInput("44", 0).atomics).toEqual("44");
      expect(Decimal.fromUserInput("44", 1).atomics).toEqual("440");
      expect(Decimal.fromUserInput("44", 2).atomics).toEqual("4400");
      expect(Decimal.fromUserInput("44", 3).atomics).toEqual("44000");

      expect(Decimal.fromUserInput("44.2", 1).atomics).toEqual("442");
      expect(Decimal.fromUserInput("44.2", 2).atomics).toEqual("4420");
      expect(Decimal.fromUserInput("44.2", 3).atomics).toEqual("44200");

      expect(Decimal.fromUserInput("44.1", 6).atomics).toEqual("44100000");
      expect(Decimal.fromUserInput("44.12", 6).atomics).toEqual("44120000");
      expect(Decimal.fromUserInput("44.123", 6).atomics).toEqual("44123000");
      expect(Decimal.fromUserInput("44.1234", 6).atomics).toEqual("44123400");
      expect(Decimal.fromUserInput("44.12345", 6).atomics).toEqual("44123450");
      expect(Decimal.fromUserInput("44.123456", 6).atomics).toEqual("44123456");
    });

    it("cuts leading zeros", () => {
      expect(Decimal.fromUserInput("4", 2).atomics).toEqual("400");
      expect(Decimal.fromUserInput("04", 2).atomics).toEqual("400");
      expect(Decimal.fromUserInput("004", 2).atomics).toEqual("400");
    });

    it("cuts tailing zeros", () => {
      expect(Decimal.fromUserInput("4.12", 5).atomics).toEqual("412000");
      expect(Decimal.fromUserInput("4.120", 5).atomics).toEqual("412000");
      expect(Decimal.fromUserInput("4.1200", 5).atomics).toEqual("412000");
      expect(Decimal.fromUserInput("4.12000", 5).atomics).toEqual("412000");
      expect(Decimal.fromUserInput("4.120000", 5).atomics).toEqual("412000");
      expect(Decimal.fromUserInput("4.1200000", 5).atomics).toEqual("412000");
    });

    it("interprets the empty string as zero", () => {
      expect(Decimal.fromUserInput("", 0).atomics).toEqual("0");
      expect(Decimal.fromUserInput("", 1).atomics).toEqual("0");
      expect(Decimal.fromUserInput("", 2).atomics).toEqual("0");
      expect(Decimal.fromUserInput("", 3).atomics).toEqual("0");
    });

    it("accepts american notation with skipped leading zero", () => {
      expect(Decimal.fromUserInput(".1", 3).atomics).toEqual("100");
      expect(Decimal.fromUserInput(".12", 3).atomics).toEqual("120");
      expect(Decimal.fromUserInput(".123", 3).atomics).toEqual("123");
    });
  });

  describe("toString", () => {
    it("displays no decimal point for full numbers", () => {
      expect(Decimal.fromUserInput("44", 0).toString()).toEqual("44");
      expect(Decimal.fromUserInput("44", 1).toString()).toEqual("44");
      expect(Decimal.fromUserInput("44", 2).toString()).toEqual("44");

      expect(Decimal.fromUserInput("44", 2).toString()).toEqual("44");
      expect(Decimal.fromUserInput("44.0", 2).toString()).toEqual("44");
      expect(Decimal.fromUserInput("44.00", 2).toString()).toEqual("44");
      expect(Decimal.fromUserInput("44.000", 2).toString()).toEqual("44");
    });

    it("only shows significant digits", () => {
      expect(Decimal.fromUserInput("44.1", 2).toString()).toEqual("44.1");
      expect(Decimal.fromUserInput("44.10", 2).toString()).toEqual("44.1");
      expect(Decimal.fromUserInput("44.100", 2).toString()).toEqual("44.1");
    });

    it("fills up leading zeros", () => {
      expect(Decimal.fromAtomics("3", 0).toString()).toEqual("3");
      expect(Decimal.fromAtomics("3", 1).toString()).toEqual("0.3");
      expect(Decimal.fromAtomics("3", 2).toString()).toEqual("0.03");
      expect(Decimal.fromAtomics("3", 3).toString()).toEqual("0.003");
    });
  });

  describe("toFloatApproximation", () => {
    it("works", () => {
      expect(Decimal.fromUserInput("0", 5).toFloatApproximation()).toEqual(0);
      expect(Decimal.fromUserInput("1", 5).toFloatApproximation()).toEqual(1);
      expect(Decimal.fromUserInput("1.5", 5).toFloatApproximation()).toEqual(1.5);
      expect(Decimal.fromUserInput("0.1", 5).toFloatApproximation()).toEqual(0.1);

      expect(Decimal.fromUserInput("1234500000000000", 5).toFloatApproximation()).toEqual(1.2345e15);
      expect(Decimal.fromUserInput("1234500000000000.002", 5).toFloatApproximation()).toEqual(1.2345e15);
    });
  });

  describe("plus", () => {
    it("returns correct values", () => {
      const zero = Decimal.fromUserInput("0", 5);
      expect(zero.plus(Decimal.fromUserInput("0", 5)).toString()).toEqual("0");
      expect(zero.plus(Decimal.fromUserInput("1", 5)).toString()).toEqual("1");
      expect(zero.plus(Decimal.fromUserInput("2", 5)).toString()).toEqual("2");
      expect(zero.plus(Decimal.fromUserInput("2.8", 5)).toString()).toEqual("2.8");
      expect(zero.plus(Decimal.fromUserInput("0.12345", 5)).toString()).toEqual("0.12345");

      const one = Decimal.fromUserInput("1", 5);
      expect(one.plus(Decimal.fromUserInput("0", 5)).toString()).toEqual("1");
      expect(one.plus(Decimal.fromUserInput("1", 5)).toString()).toEqual("2");
      expect(one.plus(Decimal.fromUserInput("2", 5)).toString()).toEqual("3");
      expect(one.plus(Decimal.fromUserInput("2.8", 5)).toString()).toEqual("3.8");
      expect(one.plus(Decimal.fromUserInput("0.12345", 5)).toString()).toEqual("1.12345");

      const oneDotFive = Decimal.fromUserInput("1.5", 5);
      expect(oneDotFive.plus(Decimal.fromUserInput("0", 5)).toString()).toEqual("1.5");
      expect(oneDotFive.plus(Decimal.fromUserInput("1", 5)).toString()).toEqual("2.5");
      expect(oneDotFive.plus(Decimal.fromUserInput("2", 5)).toString()).toEqual("3.5");
      expect(oneDotFive.plus(Decimal.fromUserInput("2.8", 5)).toString()).toEqual("4.3");
      expect(oneDotFive.plus(Decimal.fromUserInput("0.12345", 5)).toString()).toEqual("1.62345");

      // original value remain unchanged
      expect(zero.toString()).toEqual("0");
      expect(one.toString()).toEqual("1");
      expect(oneDotFive.toString()).toEqual("1.5");
    });

    it("throws for different fractional digits", () => {
      const zero = Decimal.fromUserInput("0", 5);
      expect(() => zero.plus(Decimal.fromUserInput("1", 1))).toThrowError(/do not match/i);
      expect(() => zero.plus(Decimal.fromUserInput("1", 2))).toThrowError(/do not match/i);
      expect(() => zero.plus(Decimal.fromUserInput("1", 3))).toThrowError(/do not match/i);
      expect(() => zero.plus(Decimal.fromUserInput("1", 4))).toThrowError(/do not match/i);

      expect(() => zero.plus(Decimal.fromUserInput("1", 6))).toThrowError(/do not match/i);
      expect(() => zero.plus(Decimal.fromUserInput("1", 7))).toThrowError(/do not match/i);
    });
  });
});
