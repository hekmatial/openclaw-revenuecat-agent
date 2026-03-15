import { RevenueCatWeb } from "@revenuecat/purchases-js";

const REVENUECAT_API_KEY = process.env.NEXT_PUBLIC_REVENUECAT_WEB_API_KEY || "rc_placeholder_key";

export const rc = RevenueCatWeb.setup({
  apiKey: REVENUECAT_API_KEY,
});

export async function getCustomerInfo(appUserId: string) {
  try {
    const customerInfo = await rc.getCustomerInfo(appUserId);
    return customerInfo;
  } catch (e) {
    console.error("Error fetching CustomerInfo from RevenueCat:", e);
    return null;
  }
}

export async function purchasePackage(appUserId: string, packageToBuy: any) {
  try {
    const { customerInfo } = await rc.purchase({
      appUserId,
      newPackage: packageToBuy,
    });
    return customerInfo;
  } catch (e) {
    console.error("Error performing purchase with RevenueCat:", e);
    throw e;
  }
}
