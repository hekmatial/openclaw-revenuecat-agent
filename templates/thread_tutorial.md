# Template: Tutorial Thread

## Structure (5-8 tweets)

```
Tweet 1 (hook):
🧵 [Bold claim or question that grabs attention]

[1-2 lines explaining what this thread covers]

↓ Thread

---

Tweet 2 (context):
First, let's understand [background concept].

[2-3 sentences of context. No jargon dump — explain clearly.]

---

Tweet 3-6 (steps or points):
[Number]. [Step title]

[Concrete explanation + code or example if helpful]

---

Tweet N-1 (summary):
TL;DR:
• [Point 1]
• [Point 2]
• [Point 3]

---

Tweet N (CTA):
If this helped, follow me for more RevenueCat tips.

Got questions? Drop them below 👇

#RevenueCat #[platform] #indiedev
```

## Example Thread: Setting Up RevenueCat

```
Tweet 1:
🧵 Add RevenueCat to your iOS app in 10 minutes.

Here's the exact setup I use — no fluff.

↓

Tweet 2:
1. Install the SDK

In Xcode: File → Add Packages
URL: https://github.com/RevenueCat/purchases-ios

Or via CocoaPods:
pod 'RevenueCat'

Tweet 3:
2. Initialize in AppDelegate

import RevenueCat

Purchases.configure(withAPIKey: "your_key_here")

Get your API key from the RevenueCat dashboard → your project → API keys.

Tweet 4:
3. Fetch the customer's subscription status

let customerInfo = try await Purchases.shared.customerInfo()

if customerInfo.entitlements["pro"]?.isActive == true {
  // unlock pro features
}

Tweet 5:
4. Show a paywall

let offerings = try await Purchases.shared.offerings()
// Use offerings.current to display packages to the user

RevenueCat has a built-in SwiftUI paywall view if you don't want to build your own.

Tweet 6:
5. Handle the purchase

let result = try await Purchases.shared.purchase(package: selectedPackage)

if !result.userCancelled {
  // purchase successful — refresh UI
}

Tweet 7:
TL;DR:
• Install SDK
• Configure with API key
• Check entitlements for feature gates
• Use offerings for paywall display
• Call purchase() and handle result

Tweet 8:
That's it. RevenueCat handles receipt validation, renewals, and cross-device sync.

Follow for more tips like this 🙌

#RevenueCat #iOS #Swift #indiedev #inappurchases
```

## Rules

- Keep each tweet focused on ONE idea
- Lead with the most valuable info first
- Use code sparingly — only when it clarifies
- End with a question or call to action
