"use client";

import React from 'react';
import { Button, Input, Typography } from 'antd';
import Image from 'next/image';

const { Title, Paragraph, Text } = Typography;

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[260px] md:h-[300px] flex items-center justify-center mb-12 overflow-hidden rounded-b-2xl shadow-md">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero-bg.jpg" // Make sure this image exists or update the path
            alt="Fly-Inn Hero Background"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#b71c1c]/80 to-[#212121]/80" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">"Welcome to FLY-INN"</h1>
          <p className="text-white text-base md:text-lg max-w-2xl mx-auto">
          Welcome to Fly-Inn! Fly-Inn is our own little heaven on earth, a place where we can come together as Hosts and Guests and make it easy to enjoy a
          marvellous time with our loved ones. We offer a Platform that connects Hosts who have Rental Properties and transportation to rent, with Guests
          seeking to rent from them.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[80%] mx-auto p-6">
      {/* Acceptance of Terms Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#E53935]">ACCEPTANCE OF TERMS</h2>
          <p className="text-base leading-relaxed text-gray-800">
            These <a href="#" className="text-[#E53935] underline">Terms of Service</a>, as well as our <a href="#" className="text-[#E53935] underline">Privacy Policy</a>, which is incorporated by reference (collectively, the "Terms"), govern your use or access of Fly-Inn.com, any
          subdomains thereof, and the other products, services, features, mobile applications, technologies, and software we offer (collectively, the "Platform"). These Terms are
            posted on the <a href="#" className="text-[#E53935] underline">Platform</a>. Read through all of the Terms carefully. These Terms are a legally binding agreement between you and FlyInn, LLC. <span className="font-bold">PLEASE READ THEM
            CAREFULLY. BY USING OR ACCESSING THE PLATFORM, YOU FULLY AGREE TO THESE TERMS; IF YOU DO NOT FULLY AGREE, DO NOT ACCESS OR USE THE PLATFORM.</span>
          </p>
          <p className="text-base leading-relaxed text-gray-800 mt-4">
            FlyInn, LLC, including our employees, affiliates, agents, licensees, and successors ("FlyInn") is referred to herein as <span className="font-bold">"FlyInn," "we," "us"</span> or <span className="font-bold">"our"</span>. Those accessing or using the
          Platform, whether to visit, browse information, properties or services, offer a property for rent, offer a service, request to book a property or service, book a property or
            service, or otherwise, registered or unregistered with the Platform, are referred to herein as <span className="font-bold">"User," "they," "them,"</span> or <span className="font-bold">"their."</span> and Users, if registered with the Platform, are
            hereby specifically referred to as a <span className="font-bold">"Member" "you," or "your."</span> When a Member offers a Rental Property, Goods or Services, that Member is referred to herein as <span className="font-bold">"Host."</span>
            When a Member browses, requests to book, or books a property or service, that Member is referred to herein as <span className="font-bold">"Guest."</span> Anything a Host offers is known as an <span className="font-bold">"Offering,"</span>
            and Offerings published on the Platform are referred to herein as a <span className="font-bold">"Listing."</span> When a Host offers real property for rent, that property is referred to herein as <span className="font-bold">"Rental
            Property."</span> Host Offerings of tangible products for consumption, for example, pre-packaged food, are referred to herein as <span className="font-bold">"Goods."</span> Host Offerings of services or tangible
            products for temporary use, for example, rental of cars and aircraft, are referred to herein as <span className="font-bold">"Services."</span> When the term <span className="font-bold">"will"</span> is employed in these Terms, it signifies an
            obligation with the same significance as <span className="font-bold">"shall."</span>
          </p>
          <p className="text-base leading-relaxed text-gray-800 mt-4 italic">
            (Section headings found in these Terms are for your convenience only and do not constrain the scope or extent of the respective section.)
          </p>
      </section>

        {/* Table of Contents - Redesigned */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#E53935] tracking-wide">TABLE OF CONTENTS</h2>
          <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-32">
            {/* Left Column */}
            <div className="flex-1 min-w-[260px]">
              <div className="mb-8">
                <span className="font-bold block mb-2">Welcome</span>
                <div className="space-y-1 pl-0">
                  <span className="block">Acceptance Of Terms</span>
                  <span className="block">Modification Of Terms</span>
                  <span className="block">Member Eligibility, Account Registration, And Identity Verification</span>
                  <span className="block">Flyinn's Role, Members' Responsibility, Conduct, And Use</span>
                  <span className="block">License</span>
                  <span className="block">Platform Rules</span>
                  <span className="block">Content And Intellectual Property</span>
                  <span className="block">Privacy Policy</span>
                  <span className="block">Reviews By Hosts And Guests</span>
                  <span className="block">Service Fees And How They Are Handled</span>
                  <span className="block">Credit Card Fees And Bank Card Fees</span>
                  <span className="block">Linking Policy</span>
                  <span className="block">Addressing Damage Complaints</span>
                  <span className="block">Termination Of Your Account With Flyinn</span>
                  <span className="block">Fraudulent And Suspicious Activity</span>
                  <span className="block">Suggestions And Feedback</span>
                  <span className="block">How Searches Are Performed</span>
                  <span className="block">Changes To The Platform</span>
                  <span className="block">Changes And Cancelations To Bookings</span>
                </div>
              </div>
              <div className="mb-8">
                <span className="font-bold block mb-2">HOSTS:</span>
                <div className="space-y-1 pl-0">
                  <span className="block">Termination Of Listings</span>
                  <span className="block">Hosts And Taxes</span>
                  <span className="block">Using Third-Party Websites To Get Hosts' Listings More Exposure</span>
                  <span className="block">Proof Of Ownership Or Authorization</span>
                  <span className="block">Insurance For Hosts</span>
                  <span className="block">Host Assumption Of Risk</span>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className="flex-1 min-w-[260px]">
              <div className="mb-8">
                <span className="font-bold block mb-2">GUESTS:</span>
                <div className="space-y-1 pl-0">
                  <span className="block">Insurance For Guests</span>
                  <span className="block">Account Termination Or Suspension</span>
                  <span className="block">Guest Assumption Of Risk</span>
                </div>
              </div>
              <div className="mb-8">
                <span className="font-bold block mb-2">Disclaimer Of Warranties</span>
                <div className="space-y-1 pl-0">
                  <span className="block">Limitations On Liability</span>
                  <span className="block">Indemnification And Release</span>
                  <span className="block">Contracting Entities</span>
                  <span className="block">Mandatory Pre-Arbitration Dispute Resolution And Notification</span>
                  <span className="block">Notice</span>
                  <span className="block">Agreement To Arbitrate ("Arbitration Agreement")</span>
                  <span className="block">Arbitration Rules And Governing Law</span>
                  <span className="block">Arbitration Controversy Amount Determines Location</span>
                  <span className="block">Arbitration Fees And Costs</span>
                  <span className="block">Improper Purpose, Bad Faith, Frivolous</span>
                  <span className="block">Arbitrator's Decision</span>
                  <span className="block">Class Actions, Representative Proceedings, Jury Trials</span>
                  <span className="block">Jury Trial Waiver</span>
                  <span className="block">Small Claims Vs. Arbitration</span>
                  <span className="block">Offer Of Judgment</span>
                  <span className="block">Severability And Survival</span>
                </div>
              </div>
              <div className="mb-8">
                <span className="font-bold block mb-2">Interpreting The Terms</span>
                <div className="space-y-1 pl-0">
                  <span className="block">Assignment</span>
                  <span className="block">No Waiver</span>
                  <span className="block">Force Majeure</span>
                  <span className="block">Emails And SMS</span>
                  <span className="block">Contact Us</span>
                </div>
              </div>
            </div>
  </div>
</section>

        {/* MEMBER ELIGIBILITY, ACCOUNT REGISTRATION, AND IDENTITY VERIFICATION Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">MEMBER ELIGIBILITY, ACCOUNT REGISTRATION, AND IDENTITY VERIFICATION</h2>
          <p className="text-gray-800 text-base mb-4">
            Only registered Members can be Hosts and Guests on the Platform. Being a registered Member allows you to List properties for rent, rent properties from other Members, send and receive messages, leave comments and reviews, and more.<br/>
            We strive to take whatever measures are legally available to us to verify the identity of each guest before we complete their registration. Because no measure is infallible, we cannot guarantee anyone's identity and we therefore assume no responsibility for confirming any Member's identity.<br/>
            There are a few requirements to be a registered Member of the Platform.
          </p>
          <p className="text-gray-800 text-base mb-2">By using and registering on the Platform, you hereby affirm that:</p>
          <ul className="list-disc list-inside text-gray-800 text-base mb-4 pl-4 space-y-1">
            <li>You are at least 18 years of age</li>
            <li>You are able to enter into legally binding contracts under applicable law</li>
            <li>If you are utilizing the Platform's services on behalf of a business, company, or another entity, or if you enter into contracts with third parties, you have the authorization to legally bind your team, business or other organization or entity to these Terms</li>
            <li>Each entity is compliant with the laws of the jurisdiction where it is established</li>
            <li>You are not a convicted sex offender</li>
            <li>You are not prohibited from using the Platform under the laws of the United States, or any other applicable jurisdiction</li>
            <li>You will submit to us and to the Platform only true, accurate, current, and complete information</li>
            <li>You will maintain the accuracy of such information and promptly update as necessary.</li>
          </ul>
          <p className="text-gray-800 text-base mb-2">By using and registering on the Platform, you commit to:</p>
          <ul className="list-disc list-inside text-gray-800 text-base mb-4 pl-4 space-y-1">
            <li>Completing your registration with current and accurate information upon registering on the Platform</li>
            <li>Ensuring that your account details stay current and accurate</li>
            <li>Keeping your account details both on the Platform and for your email account, including your Username and Password, secure and strictly confidential</li>
            <li>Providing your account details only to authorized users of your accounts and asking them not to disclose them to anyone else without your consent</li>
            <li>Notifying FlyInn immediately by phone at 833-I-FLY-INN or 1-FLY-INN if you suspect any compromise of your credentials or unauthorized access to your account, or if anyone has contacted you requesting your login credentials</li>
            <li>Changing your Username and Password immediately on both your email account and on the Platform if you or we suspect that your login credentials have been lost or stolen, <span className="italic">and/or</span> your account with us has been accessed without your consent or knowledge or has been otherwise compromised</li>
            <li>Complying with any reasonable requests we make to protect your account (If we believe, at our sole discretion, that your account on either the Platform or your email is being used fraudulently or by an unauthorized entity, and if we are unable to contact you or if you fail to respond to our requests promptly, we reserve the right, without notice to you or from you, to suspend or terminate your account and/or cancel any Listings you may have at any time.)</li>
            <li>Not transferring your account to another individual. Transferring your account to another individual is prohibited.</li>
          </ul>
          <p className="text-gray-800 text-base mb-4 uppercase">
            PLEASE READ CAREFULLY: FlyInn will not be held liable to any User for any unauthorized transaction conducted through the use of any User's ID or password. You are solely accountable, financially and otherwise, for any activities, actions or transactions conducted by anyone through your account on the Platform and through your email account, including any transactions you did not want or were fraudulently made. Safeguard your account credentials—the unauthorized and/or fraudulent use of your login credentials for your FlyInn or email account may result in you being held liable to both FlyInn and other Members and Users.
          </p>
          <p className="text-gray-800 text-base">
            FlyInn reserves the right, in accordance with applicable law, to undergo identity verification and checks to provide us with information about your background; to request that you furnish us with identification <span className="italic">and/or</span> any other information we deem necessary in our sole discretion; to check the information you provide us with against third-party databases and additional sources and ask that reports be provided to us; and access public records in order to obtain information and reports regarding criminal convictions including sex offender registrations.
          </p>
        </section>

        {/* FLYINN'S ROLE, MEMBERS' RESPONSIBILITY, CONDUCT, AND USE Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">FLYINN'S ROLE, MEMBERS' RESPONSIBILITY, CONDUCT, AND USE</h2>
          <ol className="list-decimal list-inside text-gray-800 text-base mb-4 pl-4 space-y-2">
            <li>
              <span className="font-bold">FlyInn's Role</span>
              <ol className="list-[lower-alpha] list-inside pl-6 space-y-1">
                <li>The Platform is a vehicle to facilitate browsing, offering, and booking Rental Properties and other Goods and Services</li>
                <li>FlyInn is not a travel agency, real estate agency or insurance agency, and FlyInn does not act as an agent for any member in any capacity</li>
                <li>FlyInn is not a party to any contract or transaction between Members</li>
                <li>FlyInn does not own, operate, manage, list, or enter into contracts for any Listings or Services.</li>
              </ol>
            </li>
            <li>
              <span className="font-bold">Members' Responsibility, Conduct, and Use</span>
              <ol className="list-[lower-alpha] list-inside pl-6 space-y-1">
                <li>We encourage Members to be honest, forthcoming, responsible, generous, service-oriented, and in integrity; and we have methods in place to ensure this is the case. Nonetheless, neither the conduct nor use of the Platform by Members is within our control. Members agree that it is the responsibility of each Member that is party to an actual or potential transaction to:</li>
              </ol>
            </li>
            <li>
              <span className="font-bold">Hosts</span>
              <ol className="list-[lower-alpha] list-inside pl-6 space-y-1">
                <li>Ensure you are acting in good faith toward those to whom you are offering your Goods and Services, and toward all other Members</li>
                <li>Ensure the accuracy of your communications and the accuracy of all information for each Rental Property, Good, or Service offered in each of your Listings</li>
                <li>Ensure the cleanliness, hygiene, safety, quality, etc. of your Listings</li>
                <li>Ensure you have the legal right to enter into contracts for the offerings in your Listings</li>
                <li>Ensure you are abiding by all laws, regulations, ordinances, and rules that apply to your Listing, your business as it pertains to the transaction for said Listing, and your conduct. Such laws, regulations, ordinances, and rules include but are not limited to such topics as taxes, privacy and the handling of data, zoning, safety, licenses, permits, accessibility, anti-discrimination, and more.</li>
                <li>Ensure you are abiding by all of FlyInn's Terms, Policies, <span className="underline">Standards</span>, Guidelines, etc.</li>
              </ol>
            </li>
            <li>
              <span className="font-bold">Guests</span>
              <ol className="list-[lower-alpha] list-inside pl-6 space-y-1">
                <li>Ensure you are acting in good faith toward those with whom you are contracting for Goods and Services, and toward all other Members</li>
                <li>Ensure the accuracy of your communications</li>
                <li>Ensure that you take proper care of the property being rented to you</li>
                <li>Ensure you are abiding by all laws, regulations, ordinances, and rules that apply to your use of each Listing for which you are contracting, your business as it pertains to the transaction for said Listing, and your conduct and the conduct of other Guests receiving benefit from the transaction</li>
                <li>Ensure you are abiding by all of FlyInn's Terms, Policies, etc.</li>
              </ol>
            </li>
          </ol>
        </section>

        {/* LICENSE Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">LICENSE</h2>
          <p className="text-gray-800 text-base text-left mx-auto">
            A limited, revocable, non-exclusive, non-sublicensable, non-transferable license is granted to each User or Member to download the app on any of your personal device(s); utilize the app on any of your personal device(s); obtain access to the Platform, its content, Listings for Rental Properties and the associated Goods and Services offered; and any other use specifically mentioned on the Platform, solely for your personal and non-commercial use and in accordance with the Terms. Any other use of the Platform or any use that violates the Terms is strictly forbidden unless explicitly allowed by us in writing.
          </p>
        </section>

        {/* PLATFORM RULES Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">PLATFORM RULES</h2>
          <ol className="list-decimal list-inside text-gray-800 text-base mb-4 pl-4 space-y-2">
            <li>
              <span className="font-bold">Technology Rules</span>
              <ol className="list-[lower-alpha] list-inside pl-6 space-y-1">
                <li>The use of data mining, robots (bots), crawlers, spiders, scrapers, or other automated methods to access, gather, extract, or collect any data or interact with the Platform in any way is strictly forbidden</li>
                <li>Copying, duplicating, scraping, displaying, mirroring, framing, et al is strictly forbidden</li>
                <li>Evading security by hacking, compromising, impairment, removal, or other means is strictly forbidden</li>
                <li>Reverse engineering, decompiling, disassembling, or deciphering the Platform, software, or hardware used to make the Platform run is strictly prohibited</li>
                <li>Any attempt to tamper with our search algorithm is strictly prohibited</li>
                <li>Any action that we deem, in our sole discretion, could cause harm to the Platform or its systems, performance, or function is strictly prohibited.</li>
              </ol>
            </li>
            <li>
              <span className="font-bold">Conduct Rules with regard to treatment of the site</span>
              <ol className="list-[lower-alpha] list-inside pl-6 space-y-1">
                <li>Do not copy, duplicate, reproduce, display, post, upload, distribute, broadcast, or transmit any part of the Content, FlyInn's branding, page layout, or design in any form whatsoever</li>
                <li>Do not deep-link to any part, page, or area of the Platform without our explicit written consent.</li>
              </ol>
            </li>
            <li>
              <span className="font-bold">Conduct Rules with regard to the use of the Platform</span>
              <ol className="list-[lower-alpha] list-inside pl-6 space-y-1">
                <li>Only Members in good standing, authorized to use the Platform under a valid license as outlined above may use the site</li>
                <li>Using the Platform or any tools, such as searching or booking, or any other services thereon for any purpose other than booking or listing a Listing, or booking or purchasing a Good or Service, is strictly prohibited</li>
                <li>See our <a href="#" className="text-[#E53935] underline">Off-the-Platform Fees Policy</a> for exceptions.</li>
              </ol>
            </li>
            <li>
              <span className="font-bold">Conduct Rules with regard to Content and Intellectual Property</span>
              <ol className="list-[lower-alpha] list-inside pl-6 space-y-1">
                <li>Content published on the Platform is only for the purpose of carrying out your activities on the Platform, under these Terms, as a Member, Guest, or Host</li>
                <li>Content published on the Platform can only be used with express written permission from the owner of said content or with our permission either outlined in these Terms or through another written agreement</li>
                <li>Infringing on our rights or the rights of third parties with the intent to plagiarize or violate the intellectual or proprietary rights to copyrights, trademarks, service marks, branding, patents, trade secrets, privacy, or any other right is strictly prohibited. See our <a href="#" className="text-[#E53935] underline">Trademark Policy</a></li>
                <li>Using or registering any trademarks, service marks, patents, domain names, social media handles, etc. that are similar enough [to those of FlyInn] to cause confusion is strictly prohibited. See our <a href="#" className="text-[#E53935] underline">Trademark Policy</a>.</li>
              </ol>
            </li>
            <li>
              <span className="font-bold">Conduct with regard to respecting others on the Platform</span>
              <ol className="list-[lower-alpha] list-inside pl-6 space-y-1">
                <li>Be respectful and courteous when you communicate or exchange with other Members</li>
                <li>Treat the property of other Members with the utmost most care and respect</li>
                <li>Do not lie; do not be purposely inaccurate, fraudulent, or misleading; do not falsify, omit material information, or impersonate anyone; do not participate in phishing; all of the above activities are strictly prohibited</li>
                <li>Posting or sharing any content that is illegal, sexually explicit, pornographic, menacing, harmful, slanderous, defamatory, lewd, obscene, crude, inappropriate, provocative, etc. is strictly prohibited</li>
                <li>Only book Listings that you will use yourself</li>
                <li>Asking, requiring, enticing, or influencing other Members to interact with a third-party website, application, or service for the purpose of securing a positive review for yourself, or any other benefit to yourself or that nature is strictly prohibited</li>
                <li>Using the property you have booked as a venue for a party, gathering, get-together, or other type of event that goes beyond the number of guests you claimed on your reservation would occupy the premises, without having such authorization from the Host is strictly prohibited. You are responsible financially and otherwise for any violations of our <a href="#" className="text-[#E53935] underline">Neighbourhood Nuisance and Disruptive Behavior Policy herein</a> incorporated by reference.</li>
                <li>Do not circumvent our enforcement of these Terms or any Terms herein incorporated by reference. See our complete list of Policies under the Section titled by the same name, contained in this document and incorporated by reference.</li>
                <li>Discrimination violates fair housing laws and creates division within our tight-knit community in all circumstances adhere to our <a href="#" className="text-[#E53935] underline">Fair Housing Policy</a>.</li>
                <li>Offer to sell, sell, transfer, or license any part of the Platform in any form to third parties;</li>
                <li>Transacting, bartering, or exchanging outside of the Platform for any reason whatsoever is strictly prohibited, with exceptions. See our <a href="#" className="text-[#E53935] underline">Off-the-Platform Fees Policy</a></li>
              </ol>
            </li>
            <li>
              <span className="font-bold">Conduct with regards to privacy and personal information</span>
              <ol className="list-[lower-alpha] list-inside pl-6 space-y-1">
                <li>Get familiar with laws that deal with privacy and data handling</li>
                <li>These Terms authorize Members to use another Member's personal information on this Platform only on an "as needed" basis and only to facilitate a transaction. Neither personal information, nor the Platform may be used in any other way without the explicit consent of the owner of such personal information.</li>
              </ol>
            </li>
            <li>
              <span className="font-bold">Conduct with regard to what is legal versus illegal</span>
              <ol className="list-[lower-alpha] list-inside pl-6 space-y-1">
                <li>Offering Rental Properties, Goods, and Services that violate laws, rules, regulations, and ordinances are strictly prohibited on this Platform</li>
                <li>Using a Listing for prostitution, even in areas where prostitution is legal is strictly prohibited</li>
                <li>Consumption by any Guest or guests of any drugs inside a Rental Property, or anywhere on the property, especially with the intent to intoxicate oneself, when said drugs are not prescribed by a physician and are not "over the counter", is strictly prohibited</li>
                <li>Alcohol consumption must be limited to the Federal Aviation Administration's legal BAC for flying (.04%).</li>
              </ol>
            </li>
            <li>
              <span className="font-bold">Dealing with Violations</span>
              <ol className="list-[lower-alpha] list-inside pl-6 space-y-1">
                <li>Should you become aware of or personally experience any Content, activity, communication, or Listing is in violation of any provision in these Terms, we request that you inform us by contacting us either on our contact form with the subject title "Violations", email us at <a href="mailto:violations@flyinn.com" className="text-[#E53935] underline">violations@flyinn.com</a>, or call us at either of our phone numbers listed on our Contact page</li>
                <li>Should you become aware of a situation in which there is imminent risk of harm to a person or property, first and immediately contact the appropriate local authorities.</li>
              </ol>
            </li>
          </ol>
        </section>

        {/* CONTENT AND INTELLECTUAL PROPERTY Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">CONTENT AND INTELLECTUAL PROPERTY</h2>
          <p className="text-gray-800 text-base mb-4">
            All Content on the Platform and the Platform itself is a collective work/compilation and may be protected by database rights, copyrights, trademarks, patents, or other laws and conventions as such.<br/>
            You hereby acknowledge that all intellectual property rights for the Content are property of FlyInn. You hereby agree to abide by any and all copyright notices, information, and/or restrictions contained on this Platform.<br/>
            Content, herein referred to as "Content", includes but is not limited to all information, writing, graphics, photography, videography, audio recordings, logos, user-generated or otherwise trademarks, service marks, trade dress, and software programs.
          </p>

          <p className="text-gray-800 text-base mb-2 font-bold">Content Submitted by Members:</p>
          <p className="text-gray-800 text-base mb-4">
            By providing or authorizing Content, in whatever form and through whatever means, you grant FlyInn a non-exclusive, unrestricted, worldwide, royalty-free, fully-paid-up, irrevocable, perpetual, sub-licensable and transferable license to host, run, access, use, adapt, edit, copy, reproduce, modify, translate, store, prepare derivative works of, distribute, display, publicly perform, publish, transmit, broadcast, stream and otherwise exploit the Content, in any manner in connection with our business and to promote and/or supply the Platform and on any media or Platform without limitation.<br/>
            You bear full responsibility for any Content you submit to be used in any way on our Platform (including but not limited to, Listings, Reviews, or Squawks (our blog)). We specifically and expressly disclaim all liability for any Content you submit.<br/>
            You must adhere to these Terms and to our <a href="#" className="text-[#E53935] underline">Content and Copyright Policy</a>, <a href="#" className="text-[#E53935] underline">Fair Housing Policy</a> and, if it contains personal information, to our <a href="#" className="text-[#E53935] underline">Privacy Policy</a>.<br/>
            Content cannot be false, knowingly inaccurate, or misleading; include anyone's personal information explicitly or be presented in such a way that it might be used to identify, locate, or contact anyone; be abusive, discriminatory, obscene, or inappropriate in any way; break the law; be spam; or any other restriction found in any of our policies or guidelines.
          </p>

          <ul className="list-disc list-inside text-gray-800 text-base mb-4 pl-4 space-y-1">
            <li>You must have the rights to Content directly related to the transaction, Listing, Rental Property, Goods, Services, or Squawk for which it is submitted.</li>
            <li>By submitting Content, you legally confirm with us in writing (if requested) that you have the necessary authority from the owner thereof to grant the rights contained herein, and you agree to provide proof of ownership or proof of the necessary authority.</li>
            <li>We reserve the right to ask that you provide proof of ownership or proof of the necessary authority.</li>
            <li>We reserve the right to decide (to its sole discretion), with or without such evidence, or remove your Content, if we, at our discretion, don't believe you have given us enough proof.</li>
            <li>Should any of your Content violate or infringe upon the intellectual property or privacy rights of any third party, you are solely responsible and may be held liable.</li>
            <li>We reserve the right to reject Content submitted by Members and we are not liable for any loss or damage resulting from the design or positioning of the writing, properties, content, photographs, audio or video; or any change made to the same.</li>
            <li>We reserve the right to decide the publication of, or any, Content that in our sole discretion we deem does not adhere to these Terms or our <a href="#" className="text-[#E53935] underline">Content and Copyright Policy</a>, which is incorporated by reference into these Terms.</li>
            <li>We reserve the right but are not obligated to make minor adjustments to any content you submit to make sure it adheres to our <a href="#" className="text-[#E53935] underline">Content and Copyright Policy</a> and/or serves our format criteria.</li>
            <li>We reserve the right but are not obligated to create a Listing for a Member or improve an existing one.</li>
            <li>We do not provide a guarantee regarding the revisions' accuracy or quality. It is the responsibility of the Members to verify the accuracy, design, or otherwise of such revisions themselves, and to make sure that any Content they submit appears on the Platform the way they envisioned.</li>
            <li>We may, at any time, without notice, at our sole discretion, rearrange how geographic descriptors are arranged on the Platform or completely create new ones.</li>
            <li>Hosts are expected to either review on their own contact to correct geographic descriptors for them. Guests are solely responsible for verifying the accuracy of the listing's location and the location reflects the geographic descriptors we have created or rearranged.</li>
          </ul>

          <p className="text-gray-800 text-base mb-4">
            Please inform us if you think that any Content on the Platform violates our <a href="#" className="text-[#E53935] underline">Content and Copyright Policy</a>, which is incorporated by reference into these Terms. You may contact us by emailing us at <a href="mailto:violations@flyinn.com" className="text-[#E53935] underline">violations@flyinn.com</a>, by using our contact form on our Contact Page and writing "Content Violations" in the subject line, or by calling us at the numbers listed on our Contact Page.
          </p>

          <p className="text-gray-800 text-base mb-2 font-bold">Copyright:</p>
          <p className="text-gray-800 text-base mb-4">
            The "FlyInn" name and logo including the red biplane, and "Fly-Inn" are trademarks in the United States and other countries.<br/>
            You hereby agree that you will not alter, delete, obscure, or conceal any trademark, copyright, or other notice appearing in any Content on the Platform.<br/>
            Except for your use in accordance with this section, you may not use the Content for your personal, non-commercial use and you shall not use, copy, reproduce, store, adapt, modify, create derivative works, distribute, license, sell or offer it for sale, transfer, publish, publicly display, publicly perform, distribute, transmit, stream, broadcast or network any content, including a local area network, or in any way exploit any Content made available through or on the Platform except as expressly permitted in these Terms or as the legal owner of the Content. Any other use is expressly prohibited without first obtaining written permission from FlyInn.
          </p>

          <p className="text-gray-800 text-base mb-2 font-bold">What is allowed:</p>
          <ul className="list-disc list-inside text-gray-800 text-base mb-4 pl-4 space-y-1">
            <li>You may screenshot, download, display, and/or print one "Copy" of any portion of the Platform, as long as it is for your own personal, noncommercial use such as that relates to part of the rental or membership, and not for further distribution. You may not alter or modify the Copy you have made, and you must ensure our copyright notice is visible in your Copy.</li>
          </ul>

          <p className="text-gray-800 text-base mb-2 font-bold">How to obtain our permission:</p>
          <p className="text-gray-800 text-base mb-4">
            If you would like our permission to use our name or logo in any other way, please email us at <a href="mailto:legal@flyinn.com" className="text-[#E53935] underline">legal@flyinn.com</a> for our written permission. We reserve the right to refuse permission for any reason.<br/>
            You can use our name or logo in a Listing without needing express written permission, as long as you adhere to these general guidelines:
          </p>
          <ol className="list-decimal list-inside text-gray-800 text-base mb-4 pl-6 space-y-1">
            <li>You may use the name, FlyInn, or the name of the Platform, FlyInn or Fly-Inn.com, as long as it is descriptive, honest, accurate and based on facts. For example, "You may say in your listing, 'FlyInn is so cool!' or 'I love being a host on FlyInn,' or 'FlyInn has a great team.'"</li>
            <li>You may not use the name, FlyInn, or the name of the Platform, FlyInn or Fly-Inn.com, or any of our affiliates in any way that might imply or lead someone to believe that you are partnered with, sponsor, or otherwise supported by, or that FlyInn exists with or as your business, property, Listing or website. Examples of unacceptable use include "FlyInn Real Estate," "FlyInn Holding Company," "FlyInn.com website services," "FlyInn Carpet Cleaning," "FlyInn Travel Agency" or "FlyInn's hottest property."</li>
            <li>You must obtain our written permission before using the FlyInn or Fly-Inn names or any of our affiliate names on any other website that lists short-term rentals.</li>
          </ol>

          <p className="text-gray-800 text-base mb-4">
            Because we acknowledge and uphold the intellectual property rights of others, we strictly prohibit the posting of any Content on the Platform that violates the copyright of any individual or entity. FlyInn reserves the right to restrict or terminate the membership of any Member who repeatedly violates copyright.
          </p>

          <p className="text-gray-800 text-base mb-4">
            You agree to, and our affiliates, as applicable, to register copyrights and safeguard all Content submitted by Users, as outlined in these Terms, against the unauthorized use by others. We may automatically replicate select content to other platforms and you hereby grant us the right to take legal action to obtain remedies for the protection of listed Content on your behalf and in your name. Additionally, you commit to appearing and cooperating with us, at our expense, in any such copyrighted Content against unauthorized reproduction.
          </p>

          <p className="text-gray-800 text-base mb-4">
            If you think that any Content on the Platform violates copyrights, please inform us following our <a href="#" className="text-[#E53935] underline">Content and Copyright Policy</a>, which is incorporated by reference into these Terms. You may contact us by emailing us at <a href="mailto:legal@flyinn.com" className="text-[#E53935] underline">legal@flyinn.com</a> and using "Copyright Infringement" in the subject line; using our contact form on our Contact Page and writing "Copyright Infringement" in the subject line; or by calling us at the numbers listed on our Contact Page.
          </p>

          <p className="text-gray-800 text-base mb-4">
            YOU ACKNOWLEDGE AND AGREE THAT YOU WILL NOT HOLD US OR ANY THIRD-PARTY PROVIDER RESPONSIBLE FOR THE CONTENT PROVIDED BY ANY USER, INCLUDING, BUT NOT LIMITED TO, ANY TRANSACTIONS THEREOF.<br/>
            ADDITIONALLY, YOU ACKNOWLEDGE AND AGREE THAT WE ARE NOT INVOLVED IN ANY RENTAL TRANSACTION OR OTHER TRANSACTION BETWEEN MEMBERS OF THE PLATFORM.
          </p>

          <p className="text-gray-800 text-base mb-4">
            WE DO NOT CONTROL OR GUARANTEE (EXCEPT FOR ANY GUARANTEE OFFERED ON THE PLATFORM) THE SAFETY OF ANY TRANSACTION OR RENTAL PROPERTY, INCLUDING, AND PERSONAL PROPERTY, ASSOCIATED WITH THE OFFERING OR LISTING, NOR THE TRUTH OR ACCURACY OF ANY LISTING OR OTHER CONTENT CONTAINED ON THE PLATFORM.<br/>
            FURTHERMORE, WE RECOGNIZE THAT BY DISPLAYING INFORMATION OR LISTINGS IN SPECIFIC DESTINATIONS, WE DO NOT REPRESENT OR GUARANTEE THAT TRAVELING TO ANY OF THOSE DESTINATIONS IS RISK-FREE, AND WE ARE NOT RESPONSIBLE FOR ANY DAMAGES INCURRED REGARDING TRAVEL TO ANY DESTINATION.
          </p>
        </section>

        {/* PRIVACY POLICY – ABOUT Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">PRIVACY POLICY – ABOUT</h2>
          <p className="text-gray-800 text-base mb-2 font-bold">Your Name and Information:</p>
          <p className="text-gray-800 text-base mb-4">
            By accessing or using the Platform, or any service or tool provided on the Platform or otherwise, you acknowledge and agree to our <a href="#" className="text-[#E53935] underline">Privacy Policy</a>. We uphold strict privacy principles. You consent to our access and utilization of Content you have furnished in line with these Terms or our <a href="#" className="text-[#E53935] underline">Privacy Policy</a>, and we commit to disclosing your Member-contributed content only as per these Terms and our <a href="#" className="text-[#E53935] underline">Privacy Policy</a>.<br/>
            When you provide your name, email address, or any other information, you consent to us sending you training, newsletters, announcements, promotional emails, offers, alerts, confirmations, surveys, and/or other general communication occasionally. However, you have the option to decline to receive promotional emails at any point. For more details on our email and other data collection practices, as well as how to opt out of receiving such emails, please refer to our <a href="#" className="text-[#E53935] underline">Privacy Policy</a>.
          </p>

          <p className="text-gray-800 text-base mb-2 font-bold">Others' Names and Information:</p>
          <p className="text-gray-800 text-base mb-4">
            We have a zero-tolerance policy towards unsolicited commercial electronic communications or SPAM. Hence, you are strictly prohibited from adding a Member to your mailing list or email list or utilizing any tool or service on the Platform to send such communications without the explicit consent of the user, including those Members who have rented a Rental Property to you or from you on the Platform.
          </p>
          <p className="text-gray-800 text-base mb-4">
            We have granted you a license to use other Members' personal information (and you agree that other Members may use yours) in accordance with this clause. Such license is only valid as long as your account on the Platform is kept in good standing. You commit that you will not abuse your license and you will safeguard other Members' personal information with at least a reasonable standard of care and judgment and you understand that you are solely liable for losing, mishandling, or divulging to any third party said information without the express written consent of the other Member.
          </p>
          <p className="text-gray-800 text-base mb-4">
            You agree that this license shall be used solely for the purpose of facilitating a transaction, that is related to the purpose of the Platform, between you and the other Member; and non-SPAM messages. You will need explicit permission from the Member for any alternative use of such information. It is prohibited to utilize any such information for any unlawful purpose or with any unlawful intent.
          </p>
          <p className="text-gray-800 text-base mb-4">
            Even if you have received permission from another Member to add them to your mailing list or email list, the law demands that you immediately remove the Member's information from your database or elsewhere and also give them a chance to view what information you had about them.
          </p>
        </section>

        {/* REVIEWS BY HOSTS AND GUESTS Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">REVIEWS BY HOSTS AND GUESTS</h2>
          <p className="text-gray-800 text-base mb-4">
            Hosts and Guests have an opportunity to leave a review for each other. This review process helps the other Member who was party to the transaction know which areas they are excelling in and which areas they could improve. Reviews also help prospective Guests get an idea of what to expect when booking a specific property, and prospective Hosts what to expect from a particular Guest. Because reviews are crucial to maintaining standards of excellence both in the quality of the Listing and the behavior and responsibility of the Host and Guest, your review must be accurate, detailed, and honest and may not contain any language that is offensive, defamatory, discriminatory, or otherwise violates these Terms, our Content and Copyright Policy, or relevant law. Unless brought to our attention, reviews are not verified by FlyInn for accuracy and may consequently be incorrect or <a href="#" className="text-[#222] underline">misleading. Please contact us</a> if you find that any review violates FlyInn's Terms, policies, or the law.
          </p>
        </section>

        {/* SERVICE FEES AND HOW THEY ARE HANDLED Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">SERVICE FEES AND HOW THEY ARE HANDLED</h2>
          <p className="text-gray-800 text-base mb-4">
            FlyInn charges Hosts and Guests a service fee when they use the Platform to complete a transaction. The service fee represents a percentage of the amount of your booking. For more information about the service fee, please visit our <a href="#" className="text-[#E53935] underline">Service Fees Policy</a> page.
          </p>
          <p className="text-gray-800 text-base mb-4">
            The service fee is refunded only if the Guest qualifies for a full refund under the Host's cancellation policy on the particular Listing that was booked.<br/>
            Our <a href="#" className="text-[#E53935] underline">Service Fees Policy</a> may change. Be sure you have your current email registered with us as we will notify you of any upcoming changes to our service fees. Should we change a fee, it will not affect any booking you made before the date the change goes into effect.
          </p>
          <p className="text-gray-800 text-base mb-4">
            You agree not to counsel other Members to avoid paying FlyInn's service fee.
          </p>
          <p className="text-gray-800 text-base mb-4">
            Any applicable fees are disclosed to Guests before making a booking. All Guests will be able to see a breakdown of the reservation amount before they check out. This includes the service fee; the cost of the rental; all other charges associated with your booking, including the ones you requested; and all applicable taxes and fees charged by the government.
          </p>
          <p className="text-gray-800 text-base mb-4">
            The breakdown also shows the Guest all applicable Taxes. In some areas, the jurisdiction imposes a Value Added Tax (VAT) on bookings in addition to the service fee.
          </p>
          <p className="text-gray-800 text-base mb-4 uppercase">
            ALL MEMBERS ARE COMPLETELY AND SOLELY RESPONSIBLE FOR THE HANDLING OF THEIR TAXES. FLYINN WILL REMIT ALL TAX COLLECTED ON THE HOST'S BEHALF TO THE HOST. PLEASE SEE OUR <a href="#" className="text-[#E53935] underline">TAXES POLICY</a> FOR MORE INFORMATION.
          </p>
        </section>

        {/* CREDIT CARD FEES AND BANK CARD FEES Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">CREDIT CARD FEES AND BANK CARD FEES</h2>
          <p className="text-gray-800 text-base mb-4">
            Credit card companies could charge the User fees in addition to their customary processing fee. The User must review any agreement with their bank or credit card company regarding any fees.
          </p>
        </section>

        {/* LINKING POLICY Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">LINKING POLICY</h2>
          <p className="text-gray-800 text-base mb-4">
            We use Google Maps on the Platform. Google Maps are subject to <a href="#" className="text-[#E53935] underline">Google Maps' terms of service</a>.
          </p>
          <p className="text-gray-800 text-base mb-4">
            This Platform may include links and references to other websites, applications, online resources, services, affiliates, partners, and sponsors. We provide these links and references solely for your information and convenience. Links to and from this website to third-party sites (maintained by them) do not imply our endorsement of those third parties, their websites, or their content. Additionally, we may offer tools for communication between this website and third-party sites, such as social media platforms. If you select a link to an outside website, you are leaving the Fly-Inn.com Platform and are subject to the terms, privacy, and security policies of the external website. We are not accountable for these third-party sites or their resources in any manner, and these Terms will not regulate your usage of such sites and resources.
          </p>
          <p className="text-gray-800 text-base mb-4">
            Any links to external websites from Members' pages are strictly prohibited and will be promptly removed without prior notice, at our sole discretion. Additionally, we reserve the right to impose penalty charges for hypertext links at any given time.
          </p>
          <p className="text-gray-800 text-base mb-4">
            The use of hypertext links to other websites and URLs of other websites in Member's pages and in our Squawks (blog section) is strictly prohibited. We reserve the right to remove links of any kind or URLs without prior notice and at our sole discretion.
          </p>
        </section>

        {/* ADDRESSING DAMAGE COMPLAINTS Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">ADDRESSING DAMAGE COMPLAINTS</h2>
          <p className="text-gray-800 text-base mb-4">
            First and foremost, Guests, be reminded you have agreed that by using the Platform to book a Rental Property in a Listing, you have agreed to take reasonable care of the property, and you intend to follow your Hosts' rules regarding their property which rules exist, among other things, to ensure their property is treated as they would treat it themselves, (not to mention ensure safety). Many Damage complaints can be avoided if you are conscientious and apply the Golden Rule. Remember that we are a tight-knit community of aviation enthusiasts. We understand responsibility for the lives and property of others. Let us extend the same care to the Listings we rent from our fellows.
          </p>
          <p className="text-gray-800 text-base mb-4">
            Notwithstanding, should any Damage occur, you, the Guest, maintain that you will collaborate with both FlyInn and the Host in good faith doing whatever is reasonable and necessary to arrive at a timely and effective resolution including supplying any information and/or signing any documents requested by entities including but not limited to FlyInn, your insurance carrier, and/or local authorities.
          </p>
          <p className="text-gray-800 text-base mb-4">
            If a Host complains that you, any of your guests, or any pets have caused any Damages, to a property that was booked on the Platform, the complaining Host can notify FlyInn and/or seek compensation by messaging you on our Platform.<br/>
            Damages, herein referred to as "Damage" or "Damages" are defined as:
          </p>
          <ol className="list-decimal list-inside text-gray-800 text-base mb-4 pl-6 space-y-1">
            <li>Any Damages the Guest has caused to any part of the property present in the Listing at the Guest's time of arrival, whether that property be real or personal, and whether or not it be represented in photographs or text in the Listing.</li>
            <li>Any Damages resulting from the loss of booking income that is a direct result of the Damage caused under (1) above.</li>
            <li>Any extra cleaning costs the Host incurred as a result of the Guest's stay.</li>
          </ol>
          <p className="text-gray-800 text-base mb-4">The process proceeds as follows:</p>
          <ul className="list-disc list-inside text-gray-800 text-base mb-4 pl-6 space-y-1">
            <li>The Host contacts the Guest through our messaging service and
              <ul className="list-disc pl-6">
                <li>Amicably and professionally describes the damage that was caused</li>
                <li>Provides valid proof in photographs</li>
                <li>Submits receipts and/or copies of estimates of what it will cost to correct the Damages.</li>
              </ul>
            </li>
            <li>The Guest has 24 hours to contact FlyInn to make a full payment.</li>
            <li>If the Guest does not pay or only pays a part of the requested amount, the Host contacts FlyInn.</li>
            <li>FlyInn assesses the situation and decides, in its sole discretion, the validity of the claim.</li>
            <li>If FlyInn decides the claim is valid, FlyInn contacts the Host through the Platform, then via email and then via telephone to locate the Guest, assess the Guest's responsibility in the matter, and resolve the issue.</li>
            <li>If FlyInn decides, in its sole discretion, that:
              <ul className="list-disc pl-6">
                <li>the claim is valid, and</li>
                <li>the Guest is responsible for the Damages,</li>
              </ul>
              The Guest has 24 hours to pay for the Damages.
            </li>
            <li>Should the Guest fail to pay for the Damages within the allocated time, the Guest agrees that FlyInn can collect the amount of the Damage claim from the Guest through the credit card the Guest used to check out.</li>
            <li>Should the payment fail, or the payment be contested by the Guest, the Guest agrees that FlyInn may
              <ul className="list-disc pl-6">
                <li>contact the Guest's insurance carrier to seek recovery of the Damages;</li>
                <li>Pursue any available remedies under applicable law against the Guest;</li>
                <li>Pursue any causes of action/claims against the Guest; and</li>
                <li>Terminate the Guest's FlyInn account.</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* TERMINATION OF YOUR ACCOUNT WITH FLYINN Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">TERMINATION OF YOUR ACCOUNT WITH FLYINN</h2>
          <p className="text-gray-800 text-base mb-4">
            Fly-Inn is the community's own little heaven on earth, a place where everyone can come together as Hosts and Guests and make it easy to enjoy a marvelous time with loved ones. We welcome people from all over the world. Hosts love to meet Guests, get to know each other, and forge friendships together with people with whom there is instantly something in common, the love of aviation. The community Members love to share stories, share culture, and learn about each other. We protect our tight-knit community from anyone who threatens the peace, safety, and satisfaction of our beloved Members. FlyInn reserves the right to remove any individual from our community who does not adhere to these principles.
          </p>
          <p className="text-gray-800 text-base mb-4">
            This agreement, as outlined in the Terms, is effective when you access the Platform and continues to be in effect active until either you or FlyInn decide to terminate it based on the conditions specified in these Terms.
          </p>
        </section>

        {/* FRAUDULENT AND SUSPICIOUS ACTIVITY Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">FRAUDULENT AND SUSPICIOUS ACTIVITY</h2>
          <p className="text-gray-800 text-base mb-4">
            FlyInn only accepts credit or bank cards on the Platform for transactions or any other matter. If any Member requests that you use any other form of payment, especially cash or a wire transfer, please call FlyInn immediately. We are not liable nor do we take on the responsibility to help Members avoid fraud or being scammed.
          </p>
          <p className="text-gray-800 text-base mb-4">
            Any violation of this provision may result in immediate termination and removal of the Listing and/or the Member's account.
          </p>
        </section>

        {/* SUGGESTIONS AND FEEDBACK Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">SUGGESTIONS AND FEEDBACK</h2>
          <p className="text-gray-800 text-base mb-4">
            We consider your feedback positive, neutral, or negative, to be a private review you leave us. We consider your suggestions a kind gesture. We thank you deeply for both because they show us how much you care to make the Community and the Platform a place you can be proud to "Fly-Inn and stay a while!"
          </p>
          <p className="text-gray-800 text-base mb-4">
            Please keep your suggestions and feedback coming! We always love to hear from you! Just bear in mind that many of our Users and employees submit suggestions and to avoid confusion in case any ideas seem similar to ideas you may have submitted, the following policy must apply:
          </p>
          <p className="text-gray-800 text-base mb-4">
            If you give us any suggestions or feedback, we reserve the right to utilize them without any compensation to you; without any restriction; and without any obligation to you to review them, consider them, or keep them confidential. This will hold even if you assert otherwise. You agree that we will own all rights to anything we create based on your suggestions or feedback.
          </p>
          <p className="text-gray-800 text-base mb-4">
            You may submit your suggestions and feedback by sending us an email to <a href="mailto:PIC@fly-inn.com" className="text-[#E53935] underline">PIC@fly-inn.com</a> and writing "Suggestions" or "Feedback" on the subject line. You may also use our contact form on our contact page and write "Suggestions" or "Feedback" on the subject line.
          </p>
        </section>

        {/* HOW SEARCHES ARE PERFORMED Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">HOW SEARCHES ARE PERFORMED</h2>
          <p className="text-gray-800 text-base mb-4">
            <span className="font-bold">Hosts:</span> When Hosts submit a Listing, they can set whatever parameters and criteria will most accurately describe their Rental Property. In addition to describing their Rental Property in their own words, they can choose from a multitude of different pre-set criteria to describe their Offerings in their Listing. The search criteria include an abundance of amenities, type of space, type of dwelling, number of bedrooms and bathrooms, price, etc.
          </p>
          <p className="text-gray-800 text-base mb-4">
            <span className="font-bold">Users:</span> Once the Listing has been published, Users will search based on their destination, Listing type, arrival and departure dates, number of guests, etc.<br/>
            Search results will display according to the criteria the Users used to conduct their search and the parameters they set. In addition, once their search results have been returned to them, they have the option of sorting their search results into the following methods of display: Default, Price (low to high), Price (High to low), Rating, Featured First, Date (old to new), Date (new to old).
          </p>
          <p className="text-gray-800 text-base mb-4">
            Featured First displays the Listings of Hosts who paid an additional fee to have their property displayed in search results, the Home Page, or other places on the Platform. Spots are filled every Monday at 12:01 a.m. from a pool of Listings by Hosts who have previously submitted a method of payment for the service. Hosts are selected by lottery and their credit card is charged the moment they are selected and their property is featured on the Platform. The lottery is per property, not per Host.
          </p>
          <p className="text-gray-800 text-base mb-4">
            If Users don't select an alternative display method, the Platform defaults to the "Default" display method. The way those Listings appear is based on a wide range of determinants, directly or indirectly and they, include but are not limited to, the quality of the Rental Property; how long it takes for a Host to respond to an inquiry; the Listing's price; how many hits the Listing receives; how many times the Listing has been viewed, loved, and saved; the quality of the Listing itself including the quantity and quality of photography; how long ago the Listing was posted on the Platform; calendar availability; minimum and maximum number of nights the Host allows; check-in and check-out time; the number of positive reviews the Listing has received; the number of positive reviews the Host has received; the status the Host has earned on the Platform; the type of Offering the Host provides; how many bookings the Listing has received; how easy it is to book the Listing; and more.
          </p>
          <p className="text-gray-800 text-base mb-2 font-bold">Keep in mind:</p>
          <ol className="list-decimal list-inside text-gray-800 text-base mb-4 pl-6 space-y-1">
            <li>We cannot ensure the order in which your Listing will appear in search results on the Platform.</li>
            <li>Search results and order may differ in appearance from mobile app to website to map view.</li>
            <li>Depending on which search criteria different Users employ, the listing order may differ for each search, even if the search is conducted by the same User. In order for Members to better enjoy a more effective experience in searching, we reserve the right to optimize our Default results in order to enhance the experience of the entire community by using different search algorithms; and to run occasional tests on our optimization.</li>
          </ol>
        </section>

        {/* CHANGES TO THE PLATFORM Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">CHANGES TO THE PLATFORM</h2>
          <p className="text-gray-800 text-base mb-4">
            We reserve the right to make any change to the Platform, at any time and in our sole discretion.
          </p>
        </section>

        {/* CHANGES AND CANCELATIONS TO BOOKINGS Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">CHANGES AND CANCELATIONS TO BOOKINGS</h2>
          <p className="text-gray-800 text-base mb-4">
            <span className="font-bold">Changes:</span> Hosts and Guests are responsible and liable for any changes to any booking they choose to make after the booking has been finalized (as evidenced by payment processed). The change can either be made on the Platform or called in for FlyInn's customer service for a team member to make the change. In the event of a booking change, Hosts and Guests are responsible for paying any additional amounts applicable to them including a change in the Listing Price, and any fees or taxes associated.
          </p>
          <p className="text-gray-800 text-base mb-4">
            <span className="font-bold">Cancellations:</span> Hosts and Guests should not cancel a booking without a valid reason to do so. Cancelling reservations without a good reason undermines the integrity, cohesiveness, and trust in our Community. Please be sure of your reservation details before creating a booking.
          </p>
          <p className="text-gray-800 text-base mb-4">
            <span className="font-bold">If A Host Cancels A Booking:</span> The amount we refund or pay the Guest, and all other reasonable costs we may incur due to the cancellation will be deducted from your disbursement amount.
          </p>
          <p className="text-gray-800 text-base mb-4">
            <span className="font-bold">If A Guest Cancels A Booking:</span> If a Guest cancels a booking, any amount disbursed to the Host is based upon the cancellation policy set in the Listing. If a Guest receives a refund after you have already received a disbursement for the booking, or if the amount paid to the Guest is greater than your disbursement, FlyInn may deduct the amount from your future disbursements.
          </p>
          <p className="text-gray-800 text-base mb-4">
            <span className="font-bold">Additional:</span> FlyInn's Terms supersede the cancellation policy Hosts set in cases where Hosts permit the cancellation of a reservation and/or allow Guests to get a refund. To appeal, please send us an email at <a href="mailto:appeals@fly-inn.com" className="text-[#E53935] underline">appeals@fly-inn.com</a>, or contact us via the form on our Contact page, subject line "Appeals". If we anticipate with good reason that we will be providing a refund to a guest in accordance with one of these policies, we may postpone any disbursement for that booking until a decision regarding the refund has been reached.
          </p>
</section>

        {/* HOSTS Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">HOSTS</h2>
          <p className="text-gray-800 text-base mb-4">
            <span className="font-bold">Who Is a Host?</span> A Host is anyone to whom FlyInn extends a license (see the License section above) to use the Platform with strict adherence to these Terms in order to share their Offerings, with our tight-knit community of aviation enthusiasts. A Host may own the Rental Property, manage it, or act as an agent to the owner. A Host may be an individual, team, business, or other entity. A Host is a business owner and/or operator or manager and as such, is solely responsible and liable under these Terms for the acts and omissions of anyone who works under or for the Host's organization in an effort to provide the Offerings that are offered in the Host's Listings.
          </p>
          <p className="text-gray-800 text-base mb-4">
            <span className="font-bold">Independent Contractors:</span> We have an independent contractor relationship with Hosts and an employer and employee, partnership, joint venture, agency, or franchiser and franchisee relationship is not intended or created by these Terms or when you use the Platform as a Host. Your hosting is your business. We do not participate in its management, nor do we decide your schedule, pricing, or conditions for extending services.
          </p>
          <p className="text-gray-800 text-base mb-4">
            <span className="font-bold">Do Hosts or Guests contract with FlyInn when they rent a property on the Platform?</span> No. When you create a booking with and for your Guest, you are creating and entering into a contract with that Guest. Your responsibilities include, but are not limited to, <span className="font-bold">honouring</span> the terms you have set in your Listing including, price, cancellation policy, amenities offered, and accuracy in representing the property through writing and photos. Separately, you are contracting with us that you agree and consent that we will be deducting anything owed to us from your disbursement.
          </p>
          <p className="text-gray-800 text-base mb-4">
            <span className="font-bold">Can Hosts have their own, supplementary contracts with Guests?</span> Yes, as long as all terms or conditions in your supplementary contracts are in agreement with FlyInn's Terms and you have as one of your photos the entire supplementary agreement, without any changes, and with any identifying information such as names and addresses, OMITTED in the photo. Should any terms in your supplemental contracts be in contradiction to any of our Terms, ours shall supersede.
          </p>
          <p className="text-gray-800 text-base mb-4">
            <span className="font-bold">What requirements do Hosts have?</span> First and foremost, Hosts, you represent that you comprehend and warrant that you will adhere to any laws, rules, regulations, ordinances, and any contracts with third parties that are applicable to your Listings.
          </p>
          <p className="text-gray-800 text-base mb-4">
            As owners of your own business, you as a Host are completely responsible and liable for your own acts and omissions and those of any of their associates in your business. We explicitly disclaim any and all liability arising from the purported accuracy of any Listing's Content submitted by Hosts, or any purported breaches of contract by either Host or Guest. Hosts are required to adhere to our standards which include, but are not limited to the following:
          </p>
          <ol className="list-decimal list-inside text-gray-800 text-base mb-4 pl-6 space-y-1">
            <li>Your Listing must be current, complete, honest, accurate, and not misleading in any way. This standard applies to everything you create into the Listing such as the title, description, photography, amenities, location, availability, the house rules and requirements you set, the price you set, all associated fees along with a description thereof, offline fees, and taxes</li>
            <li>You are responsible and liable for all Content you submit and/or omit in your Listing which must be in agreement with our Terms</li>
            <li>You are responsible and liable for remitting your own taxes to the appropriate agencies. You may not collect any other fees or charges off the Platform without express written permission from FlyInn, except fees covered in our <a href="#" className="text-[#E53935] underline">Off-the-Platform Fees Policy</a></li>
            <li>You must keep all matters that pertain to the transaction on the Platform and may not engage in any actions outside the Platform</li>
            <li>Your calendar must be accurate and current at all times</li>
            <li>You must obtain the proper <a href="#" className="text-[#E53935] underline">insurance</a> for your rental property and all personal property you may be renting along with it. We recommend that you thoroughly examine the <a href="#" className="text-[#E53935] underline">insurance</a> policy's terms and conditions, which include coverage details and exclusions. This includes our <a href="#" className="text-[#E53935] underline">Courtesy Rental, Peer-to-Peer and Car-Sharing Policy</a>. Both the <a href="#" className="text-[#E53935] underline">Short-Term Rental Insurance guidelines</a> and the <a href="#" className="text-[#E53935] underline">Courtesy Rental, Peer-to-Peer and Car-Sharing Policy</a> are incorporated herein by reference.</li>
            <li>You agree to adhere to your common sense and good customer service when handling your Guests. This includes but is not limited to responding to a reasonable number of requests for bookings in a reasonably timely manner.</li>
            <li>In addition, you may not cancel an unreasonably large percentage of bookings without express written consent from FlyInn.</li>
            <li>Each Listing must correspond to only one Space "Space". Each rental must be for only one rental agreement in place for one party at a time. A Space may be as small as a bed within a room, notwithstanding, that bed and the small space it occupies, is the only Space you are renting and may not be rented to any other person or entity at the same time</li>
            <li>Hosts may not remove the original Space from a Listing and replace it with another Space, without express written consent from FlyInn</li>
            <li>Should we grant the authorization to replace a Space in a Listing, if the replacement Space somehow changes the listing such that it seems, in our sole discretion, to be another property or entity, we reserve the right to terminate or suspend the listing or your account.</li>
          </ol>
</section>

        {/* TERMINATION OF LISTINGS Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">TERMINATION OF LISTINGS</h2>
          <p className="text-gray-800 text-base mb-4">
            We aim to make Fly-Inn.com a place where all Users can feel safe, satisfied, and comfortable. In order to ensure this, we reserve the right to any of the following remedies including, but not limited to, editing or modifying any information that may be false, inaccurate, or misleading, restricting the Host's use of the Platform, affect the position in which the Host's Listing(s) appear in search results, remove a Listing from the search results, and/or terminate a Listing, immediately and without notice to the Host if, in our sole discretion, the Host:
          </p>
          <ol className="list-decimal list-inside text-gray-800 text-base mb-4 pl-6 space-y-1">
            <li>Abuses the Platform</li>
            <li>Causes disturbances or disrupts the community where the Listing is situated, or causes a disruption in or on the Rental Property itself</li>
            <li>Participates in any practice that, at our sole discretion, would be deemed misleading, unjust, or inappropriate</li>
            <li>Uploads inappropriate content to our Platform or into our database</li>
            <li>Submits Content for a Listing and such Content violates the rights of a third party</li>
            <li>Fails to comply with local rental regulations</li>
            <li>Engages in abusive or offensive behavior towards any FlyInn employee or representative</li>
            <li>Books a Rental Property for more than one Guest on the same date</li>
            <li>Significantly breaches these Terms.</li>
          </ol>
          <p className="text-gray-800 text-base mb-4">
            We are not obligated to look into any complaints submitted by other Users.
          </p>
</section>

        {/* HOSTS' TAXES Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">HOSTS' TAXES</h2>
          <p className="text-gray-800 text-base mb-4">
            As a Host, you are a business owner and/or operator or manager and you are solely responsible for ensuring you are in compliance with all governmental agencies in regards to Taxes. Before you create your Listing you are responsible for contacting all jurisdictions to determine the type of tax you are required to collect and the percentage for each tax. Be sure you include in your price any Value Added Tax (VAT) and any other applicable tax such as occupancy taxes, tourist taxes, etc. You are solely responsible for calculating the total amount and writing that amount into your Listing. You are solely responsible for then collecting the appropriate tax, which is easily done when your Guest pays at checkout, if the jurisdiction allows FlyInn to collect it on your behalf, (USA allows it). Some jurisdictions require us to withhold Taxes from disbursements we make to you. Unless a jurisdiction requires from us otherwise, we forward all collected tax to you as part of your disbursement for each transaction. Finally, you are responsible for remitting and reporting the Taxes associated with your Listing, as well as your income tax, when you file with the appropriate agencies. Collectively, all Taxes mentioned in this paragraph shall herein be referred to as "Taxes". Please be aware that some jurisdictions require us to collect and, in some cases, report Tax information about you.
          </p>
          <p className="text-gray-800 text-base mb-4">
            If the jurisdiction allows FlyInn to collect Taxes on behalf of Hosts, you hereby authorize FlyInn to act on your behalf to collect Taxes. We reserve the right to discontinue collecting Taxes in any jurisdiction, for any reason, at our option, upon prior notice. Any Taxes that are collected by FlyInn are identified to Members on their transaction records, as applicable.
          </p>
</section>

        {/* USING THIRD-PARTY WEBSITES TO GET HOSTS' LISTINGS MORE EXPOSURE Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">USING THIRD-PARTY WEBSITES TO GET HOSTS' LISTINGS MORE EXPOSURE</h2>
          <p className="text-gray-800 text-base mb-4">
            We may share your Listing's Content/information and facilitate the exposure of your Listing on a third-party website with the end goal of affording Members to gain wider exposure for their properties. Any additional terms and conditions that may apply to said distributions may be communicated to you via email.
          </p>
        </section>

        {/* PROOF OF OWNERSHIP OR AUTHORIZATION Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">PROOF OF OWNERSHIP OR AUTHORIZATION</h2>
          <p className="text-gray-800 text-base mb-4">
            Hosts, you represent and warrant that you legally own the Rental Property that you list on the Platform or that you have all the necessary rights and authority from the owner of the Rental Property to rent and offer to rent the same.
          </p>
          <p className="text-gray-800 text-base mb-4">
            We reserve the right to ask you to provide and you agree to expeditiously supply us with any or all of the following:
          </p>
          <ol className="list-decimal list-inside text-gray-800 text-base mb-4 pl-6 space-y-1">
            <li>Proof of ownership or proof that you have all the necessary rights and authority from the owner of the Rental Property to rent and offer to rent the Rental Property you list on the Platform</li>
            <li>Personal identification</li>
            <li>Proof that all Content supplied to us as part of the description of the Listing, whether it be writing or photography accurately and completely describes the Rental Property in the Listing.</li>
          </ol>
          <p className="text-gray-800 text-base mb-4">You commit to</p>
          <ol start={4} className="list-decimal list-inside text-gray-800 text-base mb-4 pl-6 space-y-1">
            <li>Describing each Rental Property you list on the Platform accurately, truthfully, and completely</li>
            <li>Periodically reviewing for accuracy the Content of your Listing and its location and comparing it to our geographic descriptors, and promptly doing so upon our request.</li>
            <li>Disclosing any material defect the Rental Property may have</li>
            <li>Disclosing any material information about the Rental Property</li>
            <li>Ensuring you are in compliance with all governmental agencies and these Terms</li>
            <li>Keeping your calendar accurate and current at all times</li>
            <li>Acquiring and holding current <a href="#" className="text-[#E53935] underline">insurance</a> coverage adequate to safeguard against loss associated with your property, any physical injury to Guests, etc.</li>
            <li>Granting your current Guests access to the Rental Property</li>
            <li>Reimbursing FlyInn promptly for any amount paid to a Guest on your behalf and in our sole discretion for any loss a Guest has incurred. FlyInn reserves the right to pursue you for any amounts we have paid on your behalf toward the recovery of the Guest's loss.</li>
          </ol>
        </section>

        {/* INSURANCE FOR HOSTS Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">INSURANCE FOR HOSTS</h2>
          <p className="text-gray-800 text-base mb-4">
            As Independent Contractors, Hosts own their own business. FlyInn disclaims all liability for any damages, claims etc. that may arise from the activities of Hosts and Guests in relation to the booking of Listings. Hosts are solely responsible for acquiring <a href="#" className="text-[#E53935] underline">insurance</a> coverage adequate to safeguard their properties, any physical injury to Guests, etc.
          </p>
        </section>

        {/* HOST ASSUMPTION OF RISK Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">HOST ASSUMPTION OF RISK</h2>
          <p className="text-gray-800 text-base mb-4">
            You recognize that there are foreseeable and unforeseeable risks, dangers, and hazards directly or inherently involved in your participation in accessing and using the Platform and any Content (see the Content section above); booking, renting, and offering to rent or sell any Rental Property and any other Goods, Services or Offerings you have published on the Platform (Listings); or any interaction or communication you may have with your Guests or any other Member of the Platform either on the Platform or in person (collectively "Activity"); you recognize that FlyInn has no control over such risks, dangers and hazards and makes no representations of safety. You further acknowledge that you have full knowledge of the facts and circumstances associated with your participation in this Activity, you have had the possibility and opportunity to probe into the Platform to gain such knowledge which includes but is not limited to any laws, rules, regulations, ordinances and any Terms, terms, rules, standards, policies, and requirements obligations that may pertain to your Activity, and that You are not basing your actions on any legal statements made by FlyInn. If you choose to participate in any Activity, you voluntarily, to the fullest extent permitted by applicable law, assume all responsibility and risk arising out of your participation in said Activity, including but not limited to all risk of loss of limb or life; physical and emotional injuries; disability; serious illness such as infectious and non-infectious diseases and/or conditions arising from your participation or associated with developing or pre-existing conditions, accidents, property damage, injury to others, and other hazards.
          </p>
        </section>

        {/* GUESTS Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">GUESTS</h2>
          <p className="text-gray-800 text-base mb-4">
            <span className="font-bold">Who Is a Guest?</span> A Guest is an individual to whom FlyInn extends a license (see #2A above) to use the Platform with strict adherence to these Terms in order to, among other things, rent a Rental Property from a Host. See the definition of who is a Host in the Host section above.
          </p>
          <p className="text-gray-800 text-base mb-4">
            <span className="font-bold">Do Guests or Hosts contract with FlyInn when they rent a property on the Platform?</span> No. When a Host creates a booking for a Rental Property "Rental Property Booking" with and for you, you are entering into a contract with that Host. The contract terms encompass these Terms, all terms set forth in the booking, including but not limited to the cancellation policy, and any other policies, rules, guidelines, standards, or requirements specified in the Listing or at checkout that pertain to the booking. Be sure you fully understand all of the aforementioned Terms before you book a Listing.
          </p>
          <p className="text-gray-800 text-base mb-4">
            A Rental Property Booking is a limited license, and the licensee, the Guest, is granted permission to enter, occupy, and use all or part of the property on a non-exclusive basis, meaning the Host or others the Host chooses are also allowed to use the property at the same time. The Host agrees neither the Host nor others will enter the Space he has rented to you during the period of your Rental Property Booking, but reserves the right to do so, if reasonably necessary, or allowed by law pertaining to the Rental Property Booking, or allowed by your agreement with the Host. You agree to occupy the Space until no later than the checkout time in the Listing. If you overstay, the Host reserves the right to induce you to leave by imposing reasonable penalties and any other means legally available to the Host.
          </p>
          <p className="text-gray-800 text-base mb-4">
            <span className="font-bold">What requirements and responsibilities do Guests have?</span> Your requirements and responsibilities under the terms of your contract with the Host include, but are not limited to, honouring the terms set in the Listing including
          </p>
          <ol className="list-decimal list-inside text-gray-800 text-base mb-4 pl-6 space-y-1">
            <li>Paying all the charges you see at checkout such as all rental fees, our service fee, <a href="#" className="text-[#E53935] underline">Off-the-Platform Fees</a>, and taxes associated with your booking</li>
            <li>Agreeing that FlyInn may, charge your chosen Payment Method that you booked the Listing with, to collect any amounts owed due to Damages (as defined in the Addressing Damage Complaints section) to the Host</li>
            <li>Treating your Host and others with respect.</li>
            <li>Ensuring that you and all your guests, treat the Rental Property and all pertaining personal property with respect and in the condition it was delivered to you</li>
            <li>Respecting the maximum and minimum number of Guests allowed in the Listing</li>
            <li>Adhering to all applicable laws, regulations, rules, and ordinances at all times.</li>
          </ol>
        </section>

        {/* INSURANCE FOR GUESTS Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">INSURANCE FOR GUESTS</h2>
          <p className="text-gray-800 text-base mb-4">
            Guests are solely responsible for acquiring insurance coverage adequate to safeguard their trip, possessions, health, and life. Members must show proof, upon our request, that they have acquired adequate insurance coverage before any booking can take place. Acquiring insurance is very quickly, efficiently and easily accomplished online from numerous insurance companies if you simply conduct a search for short-term rental insurance or traveler insurance. The amount of time it takes will in no way constitute a reason to be absolved of this obligation. Members further agree that they will keep their insurance in good standing throughout the entire booking period.
          </p>
          <p className="text-gray-800 text-base mb-4">
            You are completely responsible and liable for your own acts and omissions and those of any guest you allow to access the Rental Property including all Common Areas. All spaces and amenities associated with the Rental Property's location that both the Host and Guest have lawful access to use in relation to the Rental Property are herein referred to as (“Common Areas”). We explicitly disclaim any and all liability arising from the acts and omissions of any Guest, or any purported breaches of contract by either Host or Guest. Hosts are required to adhere to our standards. Before booking a Listing, it's your responsibility to thoroughly read and comprehend the terms of the contract, which include these Terms as well as all terms of the Reservation, encompassing all rules, standards, policies, guidelines and requirements.
          </p>
        </section>

        {/* ACCOUNT TERMINATION OR SUSPENSION Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">ACCOUNT TERMINATION OR SUSPENSION</h2>
          <p className="text-gray-800 text-base mb-4">
            You may terminate these Terms at any time and for any reason by deleting your FlyInn account. Terminating your FlyInn account automatically cancels any confirmed booking(s) you may have. Your Guests will be issued a full refund. Terminating your account also automatically cancels any confirmed booking(s) you may have and the refund you receive, if any, will be dependent upon the terms your Host set at the time you booked. Be sure to take screenshots, make backups, or take other necessary precautions as deleting your account also deletes all of your data. We assume no responsibility for storing your data.
          </p>
          <p className="text-gray-800 text-base mb-4">
            Members whose accounts we have terminated or suspended are prohibited from registering a new account or using another Member's account to enter or use the Platform, or circumvent the suspension or termination in any other way. We may terminate these Terms and terminate or suspend your account if you fail to adhere to these Terms, any applicable law, or for any other reason. Though we can't guarantee it, we will make an effort to provide you with reasonable notice before your account is terminated. We reserve the right to terminate these Terms, immediately and without notice, and stop providing you with the ability to access the Platform or any or all functions the Platform provides, including but not limited to hide Listings, cancel all bookings, and hide reviews. We may terminate your account without prior notice due to a prolonged inactivity of more than two years. We reserve the right to recycle your username at any time and for any reason. Where we terminate or suspend your access to the Platform for having violated our community standards, or where we deem in our sole discretion that the violation was small, rare, infrequent, caused no significant amount of damage, or held no malicious intent, we will give you notice and provide an opportunity for you to appeal and/or resolve the matter.
          </p>
          <p className="text-gray-800 text-base mb-4">
            To rectify the matter and/or appeal, please send us an email at <a href="mailto:appeals@fly-inn.com" className="text-[#E53935] underline">appeals@fly-inn.com</a>, or contact us via the form on our Contact page, subject line "Appeals". In the event of a reservation cancellation pursuant to this section of the Terms, we will decrease the payment to the Host by the refund or compensation provided to the Guest, plus any additional costs incurred by us or the Host due to the cancellation. In addition to the disciplinary measures we have listed above, FlyInn reserves the right to undertake any actions it deems reasonably necessary to adhere to the law; and any order or request issued by a court of law, law enforcement, or other offices of the government under the applicable jurisdictions.
          </p>
        </section>

        {/* GUEST ASSUMPTION OF RISK Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">GUEST ASSUMPTION OF RISK</h2>
          <p className="text-gray-800 text-base mb-4">
            You recognize that there are foreseeable and unforeseeable risks, dangers, and hazards directly or inherently involved in your participation in accessing and using the Platform and any Content (see the Content section), booking and staying at any Rental Property, making use of any other Offering or Listing a Host provides, or any interaction or communication you may have with the Host or any other Member of the Platform either on the Platform or in person (collectively "Activity"); you recognize that FlyInn has no control over such risks, dangers and hazards and makes no representations of safety. You further acknowledge that you have full knowledge of the facts and circumstances associated with your participation in this Activity, you have had the possibility and opportunity to probe into the Platform to gain such knowledge which includes but is not limited to any laws, rules, ordinances, and regulations, any Terms, rules, standards, policies, and requirements obligations that may pertain to your Activity and that you are not basing your actions on any legal statements made by FlyInn. If you choose to participate in such Activity, you voluntarily, to the fullest extent permitted by applicable law, assume all responsibility and risk arising out of your participation in all Activity, including but not limited to all risk of loss of limb or life; physical and emotional injuries; disability; serious illness such as infectious and non-infectious diseases and/or conditions arising from your participation or associated with developing or pre-existing conditions, accidents, property damage, injury to others, and other hazards. This implies that you're accountable for examining a Listing or Offering to ensure it fits your needs. By agreeing, you acknowledge that you've had the chance to research the Platform and any relevant laws, rules, regulations, or obligations pertaining to your Listings or Offerings. You also confirm that you're not depending on any legal statement made by FlyInn.
          </p>
        </section>

        {/* DISCLAIMER OF WARRANTIES Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">DISCLAIMER OF WARRANTIES</h2>
          <p className="text-gray-800 text-base mb-4 uppercase">
            THE PLATFORM AND ALL CONTENT ARE PROVIDED "AS IS" AND, TO THE MAXIMUM EXTENT PERMITTED BY LAW, WITHOUT REPRESENTATION OR WARRANTY OF ANY KIND EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, REPRESENTATIONS OR WARRANTIES THAT THE PLATFORM WILL ALWAYS FUNCTION WITHOUT DELAYS, DISRUPTIONS, INTERRUPTIONS, OR IMPERFECTIONS; THAT THE PLATFORM WILL ALWAYS PERFORM IN A SECURE, ERROR-FREE, OR TIMELY MANNER; THAT ANY CONTENT OR INFORMATION, USER-PROVIDED OR OTHERWISE, YOU OBTAIN ON OR THROUGH THE PLATFORM WILL BE ERROR-FREE OR TIMELY; THAT ANY VERIFICATION PROCESS INCLUDING BACKGROUND CHECKS AND PERSONAL IDENTITY WE MAY CONDUCT ON MEMBERS WILL REVEAL PRIOR MISBEHAVIOR OR DETER FUTURE WRONGDOING; THAT ANY VERIFICATION PROCESS WE MAY CONDUCT ON A LISTING WILL REVEAL ITS ACCURACY, NON-INFRINGEMENT, MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE; OR ENDORSEMENT OF THE EXISTENCE, CONDUCT, PERFORMANCE, SAFETY, QUALITY, LEGALITY OR SUITABILITY OF ANY MEMBER OR THIRD PARTY; OR THE EXISTENCE, CONDUCT, PERFORMANCE, SAFETY, QUALITY, LEGALITY OR SUITABILITY OF ANY OFFERING OR LISTING.
          </p>
          <p className="text-gray-800 text-base mb-4">
            By "Verified" when referring to a Member or Listing, we point out only that either the Member or the Listing has undergone an identification or verification procedure, nothing further.
          </p>
        </section>

        {/* LIMITATIONS ON LIABILITY Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">LIMITATIONS ON LIABILITY</h2>
          <p className="text-gray-800 text-base mb-4 uppercase">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE AND OUR MANAGING MEMBERS, SHAREHOLDERS, PERSONNEL, AFFILIATES, LICENSORS, CONTRACTORS, CONSULTANTS, AGENTS, AND SUPPLIERS, SUCCESSORS OR ASSIGNS (THE "FLYINN TEAM") WILL NOT BE LIABLE FOR ANY INCIDENTAL, INDIRECT, EXEMPLARY, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR MULTIPLE DAMAGES, INCLUDING ANY LOST OF PROFITS, REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, LOSS OF USE, LOSS OF GOODWILL, DAMAGE TO COMPUTERS/EQUIPMENT, INTERRUPTION OF SERVICE, SYSTEM FAILURE, THE COST OF REPLACEMENT PRODUCTS OR SERVICES, ANY DAMAGES FOR PERSONAL PROPERTY OR PHYSICAL INJURY, OR EMOTIONAL DISTRESS OR OTHER INTANGIBLE LOSSES, RESULTING FROM OR IN CONNECTION WITH: (A) THE PLATFORM, (B) THESE TERMS, (C) ANY VIOLATION OF THESE TERMS BY YOU OR A THIRD PARTY, (C) THE USE OR INABILITY TO USE THE PLATFORM AND/OR ITS TOOLS OR SERVICES OR CONTENT, (D) THE CONDUCT OF OTHER USERS OR THIRD PARTIES ON OR THROUGH THE PLATFORM, (E) ANY COMMUNICATIONS, INTERACTIONS, OR MEETINGS YOU ENGAGE IN WITH INDIVIDUALS YOU ENCOUNTER THROUGH, OR ARISING FROM YOUR USE OF THE PLATFORM (E) THE CONTENT OTHER USERS OR THIRD PARTIES CONTRIBUTE TO THE PLATFORM.
          </p>
          <p className="text-gray-800 text-base mb-4 uppercase">
            APART FROM OUR RESPONSIBILITY TO SEND DISBURSEMENTS TO HOSTS UNDER THESE TERMS, OR MAKE PAYMENTS TO MEMBERS THAT HAVE SUFFERED DAMAGES UNDER THESE TERMS, IN ALL EVENTS, OUR LIABILITY, AND THE LIABILITY OF ANY MEMBER OF THE FLYINN TEAM FOR ANY CLAIM OR DISPUTE ARISING OUT OF OR IN CONNECTION WITH THE PLATFORM IS LIMITED TO THE TOTAL AMOUNT OF FEES (A) HOSTS HAVE BEEN PAID DURING THE PREVIOUS 12 MONTHS PRECEDING THE INCIDENT THAT LEADS TO THE LIABILITY (B) GUESTS HAVE PAID DURING THE PREVIOUS 12 MONTHS PRECEDING THE INCIDENT THAT LEADS TO THE LIABILITY, OR (C) A MAXIMUM OF ONE HUNDRED U.S. DOLLARS (US$100) TO ALL OTHERS.
          </p>
          <p className="text-gray-800 text-base mb-4 uppercase">
            THESE LIMITATIONS ON LIABILITY APPLY REGARDLESS OF WHETHER THE DAMAGES ARE A RESULT OF (1) BREACH OF WARRANTY, BREACH OF CONTRACT, NEGLIGENCE, STRICT TORT LIABILITY (INCLUDING NEGLIGENCE) OR OTHER LEGAL OR EQUITABLE THEORY, TO THE FULLEST EXTENT SUCH LIMITATIONS ON LIABILITY ARE NOT PROHIBITED BY APPLICABLE LAW.
          </p>
        </section>

        {/* INDEMNIFICATION AND RELEASE Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">INDEMNIFICATION AND RELEASE</h2>
          <p className="text-gray-800 text-base mb-4 uppercase">
            IF YOU HAVE A DISAGREEMENT WITH ONE OR MORE OTHER USERS OF THE PLATFORM OR ANY THIRD-PARTY PROVIDER OR WEBSITE, TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU AGREE TO RELEASE, REMISE AND FOREVER DISCHARGE, INDEMNIFY, DEFEND (AT FLYINN'S OPTION), AND HOLD EACH MEMBER OF THE FLYINN GROUP (INCLUDING FLYINN DISBURSEMENTS), EACH OF THEIR RESPECTIVE AGENTS, DIRECTORS, OFFICERS, OTHER AFFILIATES, PERSONNEL, AND ALL OTHER RELATED PERSONS OR ENTITIES HARMLESS FROM AND AGAINST ANY AND ALL MANNER OF RIGHTS, CLAIMS, COMPLAINTS, LIABILITIES, DEMANDS, DAMAGES, CAUSES OF ACTION, LEGAL CLAIMS, PROCEEDINGS, OBLIGATIONS, RECOVERIES, LOSSES, EXPENSES, FINES, PENALTIES, LEGAL FEES, ACCOUNTING FEES, COSTS, EXPENSES, AND PAYMENTS OF ANY KIND, KNOWN OR UNKNOWN, ARISING FROM OR IN ANY WAY RELATED TO SUCH DISAGREEMENT; YOUR USE OF THE PLATFORM; YOUR VIOLATION OF THESE TERMS INCLUDING ALL OTHER POLICIES INCLUDED HEREIN BY REFERENCE; YOUR BOOKING AND USE OF A RENTAL PROPERTY; YOUR ENGAGEMENT WITH ANY MEMBER; YOUR CONSUMPTION OF ANY OFFERING, GOODS OR SERVICES; ANY INJURIES, LOSSES OR DAMAGES OF ANY KIND, WHETHER THEY BE CONSEQUENTIAL, INCIDENTAL, COMPENSATORY, DIRECT, OR OTHERWISE, RELATING TO, ARISING FROM, IN CONNECTION WITH OR AS A RESULT OF SUCH ENGAGEMENT, BOOKING, PARTICIPATION, CONSUMPTION, OR USE; YOUR VIOLATION OF ANY LAWS, REGULATIONS, RULES OR ORDINANCES; OR YOUR INFRINGEMENT OR VIOLATION OF THIRD-PARTY RIGHTS SUCH AS INTELLECTUAL PROPERTY OR PRIVACY RIGHTS.
          </p>
          <p className="text-gray-800 text-base mb-4 uppercase">
            YOU MUST COOPERATE AS FULLY AS REASONABLY NECESSARY IN THE DEFENSE OF ANY CLAIM.
          </p>
          <p className="text-gray-800 text-base mb-4 uppercase">
            YOU ARE NOT PERMITTED TO SETTLE ANY MATTER WITHOUT OUR WRITTEN CONSENT UNDER ANY CIRCUMSTANCES.
          </p>
          <p className="text-gray-800 text-base mb-4 uppercase">
            IF YOU ARE A RESIDENT OF THE STATE OF CALIFORNIA, YOU HEREBY WAIVE CALIFORNIA CIVIL CODE SECTION 1542, WHICH READS: "A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH, IF KNOWN BY HIM MUST HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH THE DEBTOR.
          </p>
        </section>

        {/* CONTRACTING ENTITIES Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">CONTRACTING ENTITIES</h2>
          <p className="text-gray-800 text-base mb-4">
            FlyInn, LLC P.O. Box 270439 Fruitland, UT 84027
          </p>
        </section>

        {/* USA DISPUTE RESOLUTION AND ARBITRATION AGREEMENT Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">USA DISPUTE RESOLUTION AND ARBITRATION AGREEMENT</h2>
          <p className="text-gray-800 text-base mb-4">
            PLEASE READ THIS SECTION CAREFULLY. IT STIPULATES THAT YOU AND FLYINN CONSENT TO RESOLVE ALL DISPUTES BETWEEN US THROUGH BINDING INDIVIDUAL ARBITRATION OR IN SMALL CLAIMS COURT, AND INCLUDES A CLASS ACTION WAIVER AND JURY TRIAL WAIVER AND IT PROHIBITS YOU FROM PURSUING A CLASS ACTION OR SIMILAR PROCEEDING IN ANY VENUE.
          </p>
          <p className="text-gray-800 text-base mb-4">
            If your country of residence upholds arbitration agreements, like, for example, the United States, Arbitration is mandatory. If you are located outside the United States but seek to bring a claim within the United States, arbitration is necessary for determining the threshold issue of whether this dispute resolution section pertains to you, along with all other threshold determinations, including arbitrability, venue, residency, and applicable law. If your country of residence does not uphold arbitration agreements, the compulsory pre-arbitration dispute resolution process, notification requirements, and prohibition on class actions or representative proceedings outlined below still apply to the extent permitted by law.
          </p>
        </section>

        {/* USA GOVERNING LAW AND VENUE Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">USA GOVERNING LAW AND VENUE</h2>
          <p className="text-gray-800 text-base mb-4">
            If you reside or have your place of establishment in the United States, the arbitrator shall apply the law of the state of Utah and the United States, without regard to conflict-of-law provisions, with the exception that all provisions related to arbitration are governed by the FAA. Legal proceedings (excluding small claims actions) that are exempt from the arbitration agreement must be initiated in state or federal court in Salt Lake City, Utah unless we both consent to a different venue. Both you and we agree to venue and personal jurisdiction in Salt Lake City, Utah. Foreign laws are not applicable. Any changes to this Arbitration Agreement can only be made with mutual agreement in writing.
          </p>
        </section>

        {/* DISPUTE RESOLUTION PROCESS Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">DISPUTE RESOLUTION PROCESS</h2>
          <p className="text-gray-800 text-base text-left">
            FlyInn is dedicated and committed to excellent service and engaging in a dispute resolution process that is focused on Member satisfaction.<br/>
            Following is our two-part resolution process: Part 1 – an investigation and informal negotiation of your claim with FlyInn's customer service team, and if necessary Part 2 – a binding arbitration pursuant to the terms of this Arbitration Agreement, (conducted by the American Arbitration Association, or an agreed-upon arbitral tribunal for arbitrations conducted outside of the United States).
          </p>
        </section>

        {/* HOW THE ARBITRATION AGREEMENT APPLIES TO YOU Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">HOW THE ARBITRATION AGREEMENT APPLIES TO YOU</h2>
          <p className="text-gray-800 text-base text-left">
            This Arbitration Agreement (defined below) only applies to you if your country of residence or establishment is the United States. If your country of residence or establishment is not the United States, and you nevertheless attempt to bring any legal claim against FlyInn in the United States, this Arbitration Agreement will apply for determination of the threshold issue of whether this Arbitration Agreement Section 22 applies to you, and all other threshold determinations, including residency, arbitrability, venue, and applicable law.
          </p>
        </section>

        {/* MANDATORY PRE-ARBITRATION DISPUTE RESOLUTION AND NOTIFICATION Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">MANDATORY PRE-ARBITRATION DISPUTE RESOLUTION AND NOTIFICATION</h2>
          <p className="text-gray-800 text-base text-left">
            You agree to give us the opportunity to resolve any Dispute, by sending us an individualized notice of the Dispute in writing ("Pre-Dispute Notice") at least 60 days prior to initiating arbitration, and attempting in good faith to negotiate an informal resolution of the individual claim.<br/>
            The Pre-Dispute Notice must include the following: (A) the date, (B) your name, (C) your mailing address, (D) your FlyInn username, (E) the email address you used to make your reservation (and, if different, the email address you used to register your FlyInn account,) (F) a brief description of the nature of your complaint, (G) the relief that you are seeking, and (H) your signature.<br/>
            You must send your Pre-Dispute Notice to FlyInn by certified mail, to FlyInn's agent for service: FRONTIER REGISTERED AGENCY SERVICES LLC, 2120 Carey Ave Cheyenne, WY 82001. We will send our Pre-Dispute Notice to the email address(es) linked to your FlyInn account.<br/>
            If the parties can't resolve the complaint within the 60-day period, only then may either party commence an arbitration proceeding by submitting a written request for arbitration to the designated arbitration provider mentioned in the Arbitration Rules and Governing Law Section.<br/>
            Participating in this pre-arbitration dispute resolution and notification procedure is mandatory before initiating arbitration. The AAA cannot oversee or resolve the Dispute unless and until all "pre-arbitration dispute resolution and notification" criteria have been satisfied. Therefore, you must attach a copy of the Pre-Dispute Notice and proof that it was sent, to any arbitration demand you file.<br/>
            The statute of limitations will be tolled while the parties are involved in the dispute resolution process mandated by this Section.
          </p>
        </section>

        {/* NOTICE Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">NOTICE</h2>
          <div className="text-gray-800 text-base text-left">
            <p className="mb-2"><span className="font-bold">Notices TO US:</span> Unless expressly stated otherwise, any notices and communications to FlyInn shall be in writing and shall be deemed to have been duly given or made (A) with delivery by hand, when delivered, (B) with delivery by certified or registered mail, postage prepaid; or (C) with delivery by internationally recognized overnight courier. Notices to FlyInn must be sent to: FlyInn, LLC P.O. Box 270439 Fruitland, UT 84027.</p>
            <p className="mb-2"><span className="font-bold">Notices TO YOU or any other Member:</span> Unless expressly stated otherwise, any notices and communications to Members allowed or mandated by this agreement, will be sent</p>
            <ol className="list-decimal list-inside pl-6 mb-2">
              <li>Electronically and given by FlyInn
                <ol className="list-[lower-alpha] list-inside pl-6">
                  <li>to the email address you furnish to the Platform during your registration process, or the email address you use when you book or inquire about a rental property, or as you may have subsequently revised in your account</li>
                  <li>as an SMS or WhatsApp message</li>
                  <li>as a notification on the Platform, visible in your inbox in your dashboard</li>
                  <li>any alternate method of communication you provide us with and we make available.</li>
                </ol>
              </li>
              <li>Via certified mail, postage prepaid and return receipt requested, to any physical address you furnish to the Platform during your registration process, or as you may have subsequently revised in your account.</li>
            </ol>
            <p>Regarding email, notice shall be considered to have been duly given upon receipt or 24 hours after an email is sent unless the sender is notified that the recipient's email address is invalid. Regarding physical mail, notice shall be considered to have been duly given three (3) days after the date of mailing to a physical address.</p>
          </div>
        </section>

        {/* AGREEMENT TO ARBITRATE ("ARBITRATION AGREEMENT") Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">AGREEMENT TO ARBITRATE ("ARBITRATION AGREEMENT")</h2>
          <div className="text-gray-800 text-base text-left">
            <p className="mb-2 uppercase">
              YOU AND WE MUTUALLY AGREE THAT ANY DISPUTE, CLAIM, OR CONTROVERSY ARISING OUT OF OR RELATING IN ANY WAY TO ANY USE OF THE PLATFORM; ANY CONTENT; ANY SERVICES, FEATURES, OR PRODUCTS PROVIDED BY US; ANY OFFERINGS, LISTINGS, GOODS OR SERVICES; THESE TERMS, OUR PRIVACY POLICY, OR THE APPLICABILITY, BREACH, TERMINATION, VALIDITY, ENFORCEMENT OR INTERPRETATION THEREOF, OR (COLLECTIVELY, "DISPUTES")
              WILL BE RESOLVED BY BINDING ARBITRATION ON AN INDIVIDUAL BASIS RATHER THAN IN COURT EXCEPT THOSE RESOLVED IN SMALL CLAIMS COURT. (THE "ARBITRATION AGREEMENT").
            </p>
            <p className="mb-2">
              THIS ENCOMPASSES ANY CLAIMS YOU MAKE AGAINST US, OUR SUBSIDIARIES, OR ANY COMPANIES PROVIDING PRODUCTS OR SERVICES THROUGH US (THESE COMPANIES ARE BENEFICIARIES OF THIS ARBITRATION AGREEMENT). THIS ARBITRATION AGREEMENT IS BINDING AND COVERS ANY CLAIMS BROUGHT BY OR AGAINST THIRD PARTIES, YOUR SPOUSES, HEIRS, THIRD-PARTY BENEFICIARIES, AND ASSIGNS, IN CASES WHERE THEIR CLAIMS ARE RELATED TO YOUR UTILIZATION OF OUR SERVICES. IF ANY THIRD-PARTY BENEFICIARY TO THESE TERMS LODGES CLAIMS AGAINST THE ENTITIES COVERED BY THESE TERMS, THOSE CLAIMS WILL ALSO BE SUBJECT TO THIS ARBITRATION AGREEMENT.
            </p>
            <p className="mb-2">
              YOU AND WE MUTUALLY AGREE THAT THE ARBITRATOR WILL BE RESPONSIBLE FOR DETERMINING ALL THRESHOLD ARBITRABILITY ISSUES, INCLUDING, BUT NOT LIMITED TO, ANY OBJECTIONS WITH RESPECT TO THE EXISTENCE, SCOPE, OR VALIDITY OF THE ARBITRATION AGREEMENT; ANY DEFENSE TO ARBITRATION SUCH AS ISSUES RELATING TO WHETHER THIS ARBITRATION AGREEMENT CAN BE ENFORCED, APPLIES TO A DISPUTE; AND ANY ISSUE RELATING TO WHETHER THESE TERMS, OR ANY PROVISION OF THESE TERMS, IS UNCONSCIONABLE OR ILLUSORY OR ANY DEFENSE TO ARBITRATION, INCLUDING WAIVER, DELAY, LACHES, UNCONSCIONABILITY, OR ESTOPPEL.
            </p>
            <p>
              TO CLARIFY, YOU AND FLYINN MUTUALLY CONSENT THAT ANY ISSUE CONCERNING ARBITRABILITY, AND THE ESTABLISHMENT, ENFORCEABILITY, VALIDITY, EXTENT, OR INTERPRETATION OF ALL OR PART OF ANY SECTION IN THESE TERMS CONCERNING ARBITRATION, INCLUDING ANY DISAGREEMENT REGARDING COMPLIANCE WITH THE PRE-DISPUTE NOTICE REQUIREMENT AND A PARTY'S OBLIGATION TO COVER ARBITRATION COSTS, WILL BE SETTLED SOLELY BY AN ARBITRATOR.
            </p>
          </div>
        </section>

        {/* ARBITRATION RULES AND GOVERNING LAW Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">ARBITRATION RULES AND GOVERNING LAW</h2>
          <p className="text-gray-800 text-base text-left">
            This Arbitration Agreement is a "written agreement to arbitrate" and evidences a transaction in interstate commerce. The Federal Arbitration Act ("FAA") governs all substantive and procedural interpretation and enforcement of this provision, and not state law. The arbitration will be administered by the American Arbitration Association ("AAA") following the Selected Federal Rules and the AAA's Consumer Arbitration Rules and/or other AAA arbitration rules determined to be applicable by the AAA (the "AAA Rules") then in effect, except as modified here. The AAA Rules are available at <a href="https://www.adr.org" className="text-[#222] underline" target="_blank" rel="noopener noreferrer">www.adr.org</a>. If the AAA is unable or unwilling to administer the arbitration, you and FlyInn will consult and choose an alternative arbitration forum. If we fail to reach an agreement, then either you or FlyInn may request a court to appoint an arbitrator in accordance with 9 U.S.C. § 5. In such a scenario, the arbitration will adhere to the rules of the designated arbitration forum, unless those rules conflict with the provisions of this Arbitration Agreement.
          </p>
        </section>

        {/* ARBITRATION CONTROVERSY AMOUNT DETERMINES LOCATION Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">ARBITRATION CONTROVERSY AMOUNT DETERMINES LOCATION</h2>
          <div className="text-gray-800 text-base text-left">
            <p className="mb-2">If the disputed amount is $1,000,000 or less, any necessary arbitration hearing will be conducted remotely via video conference unless otherwise mutually agreed upon by the parties or directed by the arbitrator.</p>
            <p className="mb-2">If the disputed amount is greater than $1,000,000, any necessary arbitration hearing will be held in Salt Lake County, Utah, unless otherwise mutually agreed upon by the parties or directed by the arbitrator.</p>
            <p>If the disputed amount is less than or equal to $10,000, the parties consent to proceed solely through the submission of documents to the arbitrator.</p>
          </div>
        </section>

        {/* ARBITRATION FEES AND COSTS Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">ARBITRATION FEES AND COSTS</h2>
          <p className="text-gray-800 text-base text-left">
            Payment of all filing, administration, and arbitrator fees (collectively, the "Arbitration Fees") will be governed by the AAA Rules, and where appropriate, limited by the AAA Consumer Rules, unless otherwise provided in this Arbitration Agreement. In order to initiate arbitration, each party will be responsible for paying the filing fees required by the AAA. To request a fee waiver, you can submit an affidavit under oath to the arbitration provider. This affidavit should include your total monthly income from all sources and the number of individuals in your household. The AAA primarily considers the federal poverty guidelines when approving fee waivers. If your gross monthly income falls below 300% of the federal poverty guidelines, you qualify for a waiver of arbitration fees and costs, except for arbitrator fees. If you successfully demonstrate to the arbitrator that you are financially unable to cover your share of the Arbitration Fees, or if the arbitrator decides for any reason that you shouldn't be obligated to pay your portion of the Arbitration Fees, we will cover as much of your filing and hearing fees for the arbitration in connection with the arbitration as the arbitrator deems necessary to ensure it remains financially feasible compared to litigation costs. This assistance will be provided regardless of the arbitration outcome unless the arbitrator finds that your claim(s) was frivolous or made in bad faith.
          </p>
        </section>

        {/* IMPROPER PURPOSE, BAD FAITH, FRIVOLOUS Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">IMPROPER PURPOSE, BAD FAITH, FRIVOLOUS</h2>
          <p className="text-gray-800 text-base text-left">
            Either party may make a request that the arbitrator impose sanctions, such as awarding attorneys' fees and costs upon proving that the other party (or the other party's counsel) has asserted a claim, cross-claim, or defense that is groundless in fact or law, brought in bad faith or for the purpose of harassment, or is otherwise frivolous, as allowed by applicable law and the AAA Rules.
          </p>
        </section>

        {/* ARBITRATOR'S DECISION Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">ARBITRATOR'S DECISION</h2>
          <p className="text-gray-800 text-base text-left">
            The arbitrator will issue a written decision which will include the essential findings and conclusions on which the arbitrator bases the award. Judgment on the arbitration award may be entered in any court with proper jurisdiction. The arbitrator may award any relief allowed by law or the AAA Rules, but declaratory or injunctive relief may be awarded only on an individual basis and only to the extent necessary to provide relief warranted by the claimant's individual claim.
          </p>
        </section>

        {/* CLASS ACTIONS, REPRESENTATIVE PROCEEDINGS, JURY TRIALS Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">CLASS ACTIONS, REPRESENTATIVE PROCEEDINGS, JURY TRIALS</h2>
          <div className="text-gray-800 text-base text-left">
            <p className="mb-2">You and we acknowledge and agree that, to the fullest extent permitted by law, any and all proceedings to resolve Claims will be conducted only on an individual basis and not as a plaintiff or class member in any purported class action lawsuit, class-wide arbitration, private attorney general action, or any other manner of representative or consolidated proceeding.</p>
            <p className="mb-2">To the full extent permitted by law, (1) the arbitrator shall not consolidate claims of different parties into one proceeding and (2) shall not preside over any type of class or representative proceeding on behalf of the general public or any other persons unless agreed upon in writing or as stipulated in this agreement.</p>
            <p className="mb-2">If there is a final judicial determination that applicable law precludes enforcement of the waiver contained in this paragraph as to any claim, cause of action, or requested remedy, then you and we agree that that claim, cause of action, or requested remedy, (and only that claim, cause of action, or requested remedy,) to the extent necessary must be severed from the arbitration and may be litigated in a court of competent jurisdiction in the state or federal courts located in the State of Utah.</p>
            <p>In the event that a claim, cause of action, or requested remedy is severed pursuant to this paragraph, then you and we agree that the claims, causes of action, or requested remedies that are not subject to arbitration will be stayed until all arbitrable claims, causes of action and requested remedies are resolved by the arbitrator.</p>
          </div>
        </section>

        {/* JURY TRIAL WAIVER Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">JURY TRIAL WAIVER</h2>
          <p className="text-gray-800 text-base text-left">
            You and FlyInn acknowledge and agree that both parties are each waiving the right to a jury trial concerning all arbitrable Disputes.
          </p>
        </section>

        {/* SMALL CLAIMS VS. ARBITRATION Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">SMALL CLAIMS VS. ARBITRATION</h2>
          <p className="text-gray-800 text-base text-left">
            You and we each reserve the right to bring, or remove, any claim in small claims court instead of arbitration.<br/>
            If the claim falls within the jurisdictional limit of such court; provided that such court lacks the authority to consider any claims on a class or representative basis, or to consolidate or join the claims of other individuals or parties who may be similarly situated in such legal proceedings. If the claims asserted in any demand for arbitration do fall within the jurisdictional limit of such court, then either you or we may opt to have the claims adjudicated in small claims court instead of through arbitration, at any point before the arbitrator is appointed, or in accordance with the AAA rules, by informing the other party of that decision in writing.
          </p>
        </section>

        {/* OFFER OF JUDGMENT Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">OFFER OF JUDGMENT</h2>
          <p className="text-gray-800 text-base text-left">
            Unless prohibited by applicable law, in any legal proceeding between you and FlyInn (whether in court or arbitration), at least fourteen (14) calendar days before the arbitration hearing's date, either party (you or FlyInn) may serve an offer of judgment in writing upon the other party to allow judgment on specified terms. If the offer is accepted, the offer with proof of acceptance will be submitted to the arbitration provider, who shall enter judgment accordingly. If the offer is not accepted before the arbitration hearing or within 30 days after it is made, whichever occurs first, the offer shall be deemed withdrawn and cannot be submitted as evidence in the arbitration, except concerning costs (including all fees paid to the arbitration provider). If an offer made by one party is not accepted by the other party, and the other party fails to obtain a more favorable judgment or award, the other party shall not recover their post-offer costs and shall pay the offering party's costs (including all fees paid to the arbitration provider/arbitral forum) incurred from the time of the offer.
          </p>
        </section>

        {/* SEVERABILITY AND SURVIVAL Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">SEVERABILITY AND SURVIVAL</h2>
          <p className="text-gray-800 text-base text-left">
            If any portion of this Dispute Resolution and Arbitration Agreement is deemed illegal or unenforceable for any reason, (1) such provision will be severed and the remainder of the Arbitration Agreement will be given full force and effect, (2) if any Claims must proceed on a class, collective, consolidated, or representative basis, such Claims must be adjudicated in a civil court of competent jurisdiction rather than in arbitration, and the parties consent to litigation of those claims being stayed pending the outcome of any individual Claims in arbitration.
          </p>
          <p className="text-gray-800 text-base text-left">
            This Dispute Resolution and Arbitration Agreement will survive any termination of these Terms and will continue to apply even if you stop using the Platform or terminate your FlyInn account.
          </p>
        </section>

        {/* INTERPRETING THE TERMS Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">INTERPRETING THE TERMS</h2>
          <div className="text-gray-800 text-base text-left">
            <p className="mb-2">Unless supplemented by additional terms, policies, conditions, standards, guidelines, etc., these Terms, including those items herein incorporated by reference, constitute the entire agreement between FlyInn and you pertaining to your access to or use of the Platform and any other matters set forth herein and supersede any and all prior oral or written agreement between us and you.</p>
            <p className="mb-2">If any provision of these Terms is held to be invalid or unenforceable by any court of competent jurisdiction, except as otherwise indicated in the Jury Trial Waiver Section, the other provisions of these Terms shall remain in full force and effect.</p>
            <p className="mb-2">If there is any conflict between these Terms and any other terms and conditions pertinent to a product, tool, or service provided on our Platform, the terms stated herein shall take precedence.</p>
            <p>Further, any provision of these Terms held invalid or unenforceable only in part or degree will remain in full force and effect to the extent not held invalid or unenforceable.</p>
          </div>
        </section>

        {/* ASSIGNMENT Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">ASSIGNMENT</h2>
          <p className="text-gray-800 text-base text-left">
            We reserve the right, without limitation and at our sole discretion, to assign, transfer, or delegate these Terms and any associated rights and responsibilities, with 30 days' prior notice.
          </p>
          <p className="text-gray-800 text-base text-left">
            You may not assign, transfer, or delegate these Terms or your rights and obligations hereunder without our prior written consent, which we may grant or withhold, solely at our discretion.
          </p>
        </section>

        {/* SURVIVAL Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">SURVIVAL</h2>
          <p className="text-gray-800 text-base text-left">
            All provisions that by their nature and intent remain valid after the term of this Agreement will survive termination.
          </p>
        </section>

        {/* NO WAIVER Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">NO WAIVER</h2>
          <p className="text-gray-800 text-base text-left">
            FlyInn's failure to enforce any right or provision in these Terms shall not in any way be construed as a waiver of such right or provision nor prevent us from thereafter enforcing any right or provision of this Agreement unless we acknowledge and agree to it in writing. Aside from what is explicitly outlined in these Terms, the implementation of any remedies by either party under these Terms will not affect its other remedies under these Terms or as otherwise allowed by law.
          </p>
        </section>

        {/* FORCE MAJEURE Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">FORCE MAJEURE</h2>
          <p className="text-gray-800 text-base text-left">
            FlyInn shall not be liable for any failure or delay in performance under this Agreement to the extent such failure or delay is caused by abnormal or unforeseeable circumstances beyond its reasonable control, the consequences of which would have been unavoidable despite all efforts to the contrary, including, but not limited to, acts of God, natural disasters, war, terrorism, riots, civil unrest, government action, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, epidemics or disease, strikes or labor disputes, or shortages of transportation facilities, fuel, energy, labour or materials.
          </p>
        </section>

        {/* EMAILS AND SMS Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">EMAILS AND SMS</h2>
          <p className="text-gray-800 text-base text-left">
            FlyInn makes use of the email account we have on file for you, which you have provided, to send you administrative notifications. We may also send you promotional emails. Third-party data rates could apply to promotional emails.
          </p>
        </section>

        {/* CONTACT US Section */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#E53935] text-center mb-6 uppercase tracking-wide">CONTACT US</h2>
          <p className="text-gray-800 text-base text-left">
            If you have any questions about these Terms please contact us on our contact page, call us, or email us at <a href="mailto:help@fly-inn.com" className="text-[#E53935] underline">help@fly-inn.com</a>.
          </p>
        </section>


      </div>
                    {/* Newsletter Section */}
                    <div className="flex flex-row items-center justify-evenly py-8 bg-red-600 w-full">
        <h2 className="mb-4 text-xl font-semibold text-white">Subscribe to Our Newsletter Now!</h2>
        <div className="flex w-full max-w-xl gap-2">
          <Input placeholder="Enter your Email here" className="rounded-lg" />
          <Button className="px-8 text-white bg-black rounded-lg">SUBSCRIBE</Button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;