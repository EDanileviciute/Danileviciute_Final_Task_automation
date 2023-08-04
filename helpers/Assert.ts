import { expect } from '@playwright/test';

export default class Assert {
  /**
   * T verify actuL Vlue equals expected value
   * @param actual
   * @param expected
   * @param softAssert
   */
  public static async assertEquals(
    actual: any,
    expected: any,
    softAssert = false,
  ) {
    try {
      expect(
        actual,
        `Expected '${expect}' should be EQUAL to Actual '${actual}'`,
      ).toEqual(expected);
    } catch (error) {
      if (!softAssert) {
        throw new Error(error);
      }
    }
  }

  public static async assertTrue(
    actual: any,
    expected: any,
    softAssert = false,
  ): Promise<boolean> {
    try {
      expect(actual).toContain(expected);
      return true;
    } catch (error) {
      if (!softAssert) {
        throw new Error(error);
      }
      return false;
    }
  }
}
