/**
 * RevenueCat Web SDK Wrapper
 * Designed for Cycle 1: Japanese Fortune-Telling App POC
 */

import { Purchases } from '@revenuecat/purchases-js';

const REVENUECAT_WEB_API_KEY = process.env.NEXT_PUBLIC_REVENUECAT_WEB_API_KEY || 'rc_web_placeholder';

export const initRevenueCat = async (appUserId: string) => {
  if (typeof window === 'undefined') return;
  
  try {
    Purchases.configure(REVENUECAT_WEB_API_KEY, appUserId);
    console.log('RevenueCat SDK configured for user:', appUserId);
  } catch (error) {
    console.error('RevenueCat configuration failed:', error);
  }
};

export const getOfferings = async () => {
  try {
    const offerings = await Purchases.getOfferings();
    return offerings;
  } catch (error) {
    console.error('Failed to fetch offerings:', error);
    return null;
  }
};

export const purchasePackage = async (pkg: any) => {
  try {
    const { customerInfo } = await Purchases.purchasePackage(pkg);
    return customerInfo;
  } catch (error) {
    console.error('Purchase failed:', error);
    throw error;
  }
};

export const getCustomerInfo = async () => {
  try {
    const customerInfo = await Purchases.getCustomerInfo();
    return customerInfo;
  } catch (error) {
    console.error('Failed to get customer info:', error);
    return null;
  }
};
