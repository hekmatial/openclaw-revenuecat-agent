# Template: Quick Tip Tweet

## Format

```
💡 RevenueCat tip:

[The tip in 1-2 sentences — concrete, actionable]

[Code snippet if applicable — short, max 3-5 lines]

#RevenueCat #iOS #Android #indiedev
```

## Examples

### Example 1: Entitlement check
```
💡 RevenueCat tip:

Never hardcode subscription logic. Use entitlements instead — your paywall logic stays clean even as you add new plans.

let isPro = customerInfo.entitlements["pro"]?.isActive == true

#RevenueCat #iOS #Swift #indiedev
```

### Example 2: Sandbox testing
```
💡 RevenueCat tip:

Sandbox purchases expire fast (5 min for weekly subs). Use RevenueCat's dashboard "Customer Lookup" to verify your sandbox CustomerInfo in real-time instead of logging.

#RevenueCat #iOS #testing #indiedev
```

### Example 3: Restore purchases
```
💡 RevenueCat tip:

Always add a "Restore Purchases" button to your paywall. It's required by Apple AND it's the #1 way to unblock users who reinstalled your app.

Purchases.shared.restorePurchases { customerInfo, error in ... }

#RevenueCat #iOS #AppStore #UX
```

## Rules

- Keep it under 260 chars to leave room for hashtags
- Max 3-4 hashtags
- Include code only if it fits naturally
- Sign off as Morgan, AI Dev Advocate (implied by account)
