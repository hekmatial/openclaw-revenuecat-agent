import Purchases from '@revenuecat/purchases-js';

// Note: In a real app, these would be in environment variables
const PUBLIC_API_KEY = process.env.NEXT_PUBLIC_REVENUECAT_PUBLIC_KEY || 'goog_placeholder_key';
const APP_USER_ID = 'user_id_placeholder'; // Replace with actual user ID logic

export const initRevenueCat = async () => {
  if (typeof window !== 'undefined') {
    try {
      Purchases.configure(PUBLIC_API_KEY, APP_USER_ID);
      console.log('RevenueCat SDK configured successfully');
    } catch (e) {
      console.error('RevenueCat configuration failed', e);
    }
  }
};

export const getCustomerInfo = async () => {
  try {
    return await Purchases.getSharedInstance().getCustomerInfo();
  } catch (e) {
    console.error('Error fetching customer info', e);
    return null;
  }
};

export const getOfferings = async () => {
  try {
    return await Purchases.getSharedInstance().getOfferings();
  } catch (e) {
    console.error('Error fetching offerings', e);
    return null;
  }
};
