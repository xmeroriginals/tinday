# TinDay Source-Available Ethical License v2.1
Copyright (c) 2025 TinDay Collective | XmerOriginals™
TinDay is a project developed and maintained by Xmer and contributors.

This document serves both as a legal license and a binding technical-ethical specification for the use and modification of TinDay.
Any use, modification, or redistribution is expected to adhere to these foundational structures.

Any damage or security breaches resulting from user or third-party modifications, especially those removing or weakening security protections, shall be solely the responsibility of the modifier. The TinDay project and its developers expressly disclaim all liability for any problems, damages, or losses arising from such modifications.

---
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to use, copy, modify, merge, publish, and distribute the Software, including commercial and non-commercial purposes, under the following conditions:

**1. Attribution Requirement** | 
All public uses or distributions of the Software or derivative works must include clear attribution to “TinDay” as the original creator. A visible mention (website footer, about page) is required.

**2. Ethical Use Clause** | 
This software may not be used for purposes that infringe upon the rights or safety of others, including (but not limited to) surveillance, profiling, harassment, or any form of illegal or malicious activity. Use of this software to create, spread, or organize violence or harm — including coordinated attacks, hate speech, or child exploitation — is strictly prohibited. Violations are considered outside the scope of TinDay and its support, developers cannot be held responsible.

**3. Data Privacy Guarantee** | 
The original version of the TinDay platform does not collect or store any personal user data. If reused or extended, modified versions are encouraged to maintain privacy-preserving structures and must disclose any data collection clearly in their documentation.

**4. Liability & Responsibility Disclaimer** | 
This software is provided “as is,” without warranty of any kind. In no event shall the authors or copyright holders be liable for any claims, damages, or other liabilities arising from the use, misuse, or failure of the software.
Any misuse of TinDay’s core platform (including P2P misuse, abuse of anonymity, or third-party plugin behavior) is the sole responsibility of the deployer or end user — not the TinDay Team. We do not track or moderate messages by privacy policy.

**5. Non-endorsement** | 
Use of the TinDay name or branding (logo, slogan, UI design) must not imply official support or endorsement by the TinDay Team without prior written permission.

**6. Legal Requests & Government Disclosure** | 
TinDay is an anonymous, ephemeral communication platform. By design, the system does not store any chat messages, user metadata, connection logs, or identifying information on any server. All communication is transient and peer-to-peer (P2P) or via encrypted WebSockets without retention. As a result, TinDay Team is technically unable to comply with requests to retrieve past messages or user activity — no such data exists to be provided. We fully condemn any illegal activity carried out through this platform. However, as TinDay is decentralized and does not collect or process any user-identifiable data, we cannot trace, identify, or report users. Responsibility lies solely with the individual users.


**7. Security Integrity Clause** | 
This is a client-side only project. Any forks, redistributions, or derivatives must preserve or replicate core client-side security features — including but not limited to:

_Basics_
- P2P Security (p2p automatic spam protection, automatic P2P rejection handler, p2p automatic disapproval, p2p manual checks, p2p file sharing size limit automatic blocker.)
- Not accepting any P2P connections without user approval. (For IP Protection)
- Do not automatically accept any files sent to Inbox. (For IP protection)
- Protections that may disturb the user are filtered in the recipient client and added to user messages. For example, a profanity filter/nudity filter, etc. (Never add it to the user's message field without filtering.)
- It is important for the security of the recipient not to increase the P2P Protection values too much. It can be adjusted in a controlled manner, but to keep the restrictions as narrow as possible in case the sender is aggressive.
- Message Spam Protections.
- Not displaying long texts/long names after some parts of them. (long-text overflow mitigation)
- Blocking downloads of dangerous files.
- Confirmation delay modal for files before downloading.
- Warning modal before opening a link.
- Not placing externally sent messages/names, even the simplest file names that may come from any other user, into inner.HTML without cleaning the HTML tags. (for XSS attack protection)
- Limitations on automatic/manual messages sent from other users.
- No untrusted connections are previewed. (For IP protection)
- Ensuring the protection of the Receiving Clients and not informing the Sending Clients about this in any way. (To manipulate the Attacker)
- Do not remove warning messages that will prevent users from being manipulated by attackers. If you do remove them, support them with your own official warning messages. (Never leave official messages; always inform your users with official messages.)
- Overly large messages, videos, images, and audio are discarded by the WebSocket server, and the sender's connection is terminated. If you use a server other than TinDay's WSS server, make sure it has these features.
- Do not increase spam protections. Since it is anonymous chat, the attacker can easily re-join and continue the attack by refreshing the page once. Therefore, do not increase spam protections but you can reduce them.
- Not Removing Profanity Filters, Profanity Filters can be added to but cannot be removed. The Profanity Filter setting cannot be made mandatory but should be set to on by default for user security.

Removing or weakening these measures intentionally is strongly discouraged, as it compromises user safety and anonymity — foundational principles of this project.
Equivalent or superior alternative implementations of core protections are permitted, as long as they meet the intended ethical and security goals outlined above.

**Examples of Prohibited Uses Include** |
- Using TinDay’s name/logo to promote a platform that collects user data.
- Selling access to a TinDay-branded derivative.
- Implying official affiliation with TinDay while modifying core ethical rules.

** Approved Derivative Works Must _Not Use the TinDay Name/Logo_ Unless** |
- They clearly state they are unofficial forks.
- They comply fully with TinDay's ethical and technical license clauses.

# Future Contributions
_We welcome contributions that reinforce the core values of security, privacy, and decentralized anonymity, while preserving the ethical integrity of TinDay._
