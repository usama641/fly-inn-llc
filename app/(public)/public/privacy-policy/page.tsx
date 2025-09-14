"use client";

import React from "react";
import Image from "next/image";
import NewsletterSection from "../../_components/newsletter-section";
import LayoutPublic from "@/components/app-layouts/public-layout";

const PrivacyPolicy = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[220px] md:h-[260px] flex items-center justify-center mb-12 overflow-hidden rounded-b-2xl shadow-md">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero-bg.jpg"
            alt="Privacy Policy Hero Background"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#b71c1c]/80 to-[#212121]/80" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            'FLY-INN'S Privacy Policy'
          </h1>
          <p className="text-white text-sm md:text-base max-w-[80%] mx-auto">
            This Privacy Policy ("Policy") applies to www.fly-inn.com, FlyInn
            LLC ("FlyInn") and governs data collection and usage. For the
            purposes of this Privacy Policy, unless otherwise noted, all
            references to FlyInn include www.fly-inn.com, FlyInn Disbursements,
            LLC, and disbursements.fly-inn.com. FlyInn's platform is a
            Hospitality site. By using FlyInn's platform, you consent to the
            data practices described in this statement.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[80%] mx-auto p-6  mb-16">
        {/* Collection of Your Personal Information */}
        <section className="mb-10">
          <h2 className="text-center text-[#E53935] font-bold text-xl mb-4">
            Collection of Your Personal Information
          </h2>
          <p className="mb-4 text-gray-800 text-base">
            In order to better provide you with products and services offered,
            FlyInn may collect: personally identifiable information, such as
            your:
          </p>
          <ul className="list-disc list-inside text-gray-800 text-base mb-4 pl-4 space-y-1">
            <li>First and last name</li>
            <li>Mailing address</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Date of birth</li>
            <li>Profile Photo</li>
          </ul>
          <p className="mb-4 text-gray-800 text-base">
            If you purchase FlyInn's products and services, we collect billing
            and credit card information. This information is used to complete
            the purchase transaction.
            <br />
            FlyInn may also collect anonymous demographic information, which is
            not unique to you, such as your:
          </p>
          <ul className="list-disc list-inside text-gray-800 text-base mb-4 pl-4 space-y-1">
            <li>Age</li>
            <li>Gender</li>
          </ul>
          <p className="mb-4 text-gray-800 text-base">
            Please keep in mind that if you directly disclose personally
            identifiable information or personally sensitive data through
            FlyInn's public message boards, this information may be collected
            and used by others.
          </p>
          <p className="mb-4 text-gray-800 text-base">
            We do not collect any personal information about you unless you
            voluntarily provide it to us. However, you may be required to
            provide certain personal information to us when you elect to use
            certain products or services. These may include: (a) registering for
            an account; (b) entering a sweepstakes or contest sponsored by us or
            one of our partners; (c) signing up for special offers from selected
            third parties; (d) sending us an email message; (e) submitting your
            credit card or other payment information when ordering and
            purchasing products and services. To wit, we will use your
            information for, but not limited to, communicating with you in
            relation to services and/or products you have requested from us. We
            also may gather additional personal or non-personal information in
            the future.
          </p>
        </section>

        {/* Use of Your Personal Information */}
        <section className="mb-10">
          <h2 className="text-center text-[#E53935] font-bold text-xl mb-4">
            Use of Your Personal Information
          </h2>
          <p className="mb-4 text-gray-800 text-base">
            FlyInn collects and uses your personal information in the following
            ways:
          </p>
          <ul className="list-disc list-inside text-gray-800 text-base mb-4 pl-4 space-y-1">
            <li>to operate and deliver the services you have requested</li>
            <li>
              to provide you with information, products, or services that you
              request from us
            </li>
            <li>to provide you with notices about your account</li>
            <li>
              to carry out FlyInn obligations and enforce our rights arising
              from any contracts entered between you and us, including for
              billing and collection
            </li>
            <li>
              to notify you about changes to our www.fly-inn.com or any products
              or services we offer or provide through it.
            </li>
            <li>
              in any other way we may describe when you provide the information
            </li>
            <li>for any other purpose with your consent.</li>
          </ul>
          <p className="mb-4 text-gray-800 text-base">
            FlyInn may also use your personally identifiable information to
            inform you of other products or services available from FlyInn and
            its affiliates.
          </p>
        </section>

        {/* Sharing Your Information with Third Parties */}
        <section className="mb-10">
          <h2 className="text-center text-[#E53935] font-bold text-xl mb-4">
            Sharing Your Information with Third Parties
          </h2>
          <p className="mb-4 text-gray-800 text-base">
            FlyInn does <span className="font-bold underline">NOT</span> sell,
            rent, or lease its customer lists to third parties.
          </p>
          <p className="mb-4 text-gray-800 text-base">
            FlyInn may, from time to time, contact you on behalf of external
            business partners about a particular offering that may be of
            interest to you. In those cases, your unique personally identifiable
            information (email, name, address, phone number) is not transferred
            to the third party. FlyInn may share data with trusted partners to
            help perform statistical analysis, send you email or postal mail,
            provide customer support, or arrange for deliveries. All such third
            parties are prohibited from using your personal information except
            to provide these services to FlyInn, and they are required to
            maintain the confidentiality of your information.
          </p>
          <p className="mb-4 text-gray-800 text-base">
            FlyInn may disclose your personal information, without notice, if
            required to do so by law or in the good faith belief that such
            action is necessary to: (a) conform to the edicts of the law or
            comply with legal process served on FlyInn or the platform; (b)
            protect and defend the rights or property of FlyInn ; and/or (c) act
            under exigent circumstances to protect the personal safety of users
            of FlyInn, or the public
          </p>
        </section>

        {/* Tracking User Behaviour */}
        <section className="mb-10">
          <h2 className="text-center text-[#E53935] font-bold text-xl mb-4">
            Tracking User Behaviour
          </h2>
          <p className="mb-4 text-gray-800 text-base">
            FlyInn may keep track of the and pages our users visit within
            FlyInn, in order to determine what FlyInn services are the most
            popular. This data is used to deliver customized content and
            advertising within FlyInn to customers whose behaviour indicates
            that they are interested in a particular subject area.
          </p>
        </section>

        {/* Automatically Collected Information */}
        <section className="mb-10">
          <h2 className="text-center text-[#E53935] font-bold text-xl mb-4">
            Automatically Collected Information
          </h2>
          <p className="mb-4 text-gray-800 text-base">
            FlyInn may automatically collect information about your computer
            hardware and software. This information can include your IP address,
            browser type, domain names, access times, and referring website
            addresses. This information is used for the operation of the
            service, to maintain quality of the service, and to provide general
            statistics regarding the use of FlyInn's platform.
          </p>
        </section>

        {/* Links */}
        <section className="mb-10">
          <h2 className="text-center text-[#E53935] font-bold text-xl mb-4">
            Links
          </h2>
          <p className="mb-4 text-gray-800 text-base">
            This platform contains links to other sites. Please be aware that we
            are not responsible for the content or privacy practices of such
            other sites. We encourage our users to be aware when they leave our
            platform and to read the privacy statements of any other site that
            collects personally identifiable information.
          </p>
        </section>

        {/* Security of your Personal Information */}
        <section className="mb-10">
          <h2 className="text-center text-[#E53935] font-bold text-xl mb-4">
            Security of your Personal Information
          </h2>
          <p className="mb-2 text-gray-800 text-base">
            FlyInn secures your personal information from unauthorized access,
            use, or disclosure. FlyInn uses the following methods for this
            purpose:
          </p>
          <ul className="list-disc list-inside text-gray-800 text-base mb-2 pl-4">
            <li>SSL Protocol</li>
          </ul>
          <p className="mb-4 text-gray-800 text-base">
            When personal information (such as a credit card number) is
            transmitted to other websites, it is protected through the use of
            encryption, such as the Secure Sockets Layer (SSL) protocol.
          </p>
          <p className="mb-4 text-gray-800 text-base">
            We strive to take appropriate security measures to protect against
            unauthorized access to or alteration of your personal information.
            Unfortunately, no data transmission over the Internet or any
            wireless network can be guaranteed to be 100% secure. As a result,
            while we strive to protect your personal information, you
            acknowledge that: (a) there are security and privacy limitations
            inherent to the Internet that are beyond our control; and (b) the
            security, integrity, and privacy of any and all information and data
            exchanged between you and us through this site cannot be guaranteed.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-center text-[#E53935] font-bold text-xl mb-4">
            Right to Deletion
          </h2>
          <p className="mb-4 text-gray-800 text-sm md:text-base">
            Subject to certain exceptions set out below, on receipt of a
            verifiable request from you, we will:
          </p>
          <ul className="list-disc list-inside text-gray-800 text-sm md:text-base mb-4 pl-4 space-y-1">
            <li>Delete your personal information from our records; and</li>
            <li>
              Direct any service providers to delete your personal information
              from their records.
            </li>
          </ul>
          <p className="mb-4 text-gray-800 text-sm md:text-base">
            Please note we may not be able to comply with requests to delete
            your personal information if it is necessary to:
            <br />- Complete the transaction for which the personal information
            was collected.
            <br />- Detect security incidents, protect against malicious,
            deceptive, fraudulent, or illegal activity.
            <br />- Exercise free speech, ensure the right of another consumer
            to exercise his or her right of free speech.
            <br />- Comply with the California Electronic Communications Privacy
            Act.
            <br />- Comply with a legal obligation.
            <br />- Otherwise use your personal information, internally, in a
            lawful manner that is compatible with the context in which you
            provided the information.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-center text-[#E53935] font-bold text-xl mb-4">
            Children Under Thirteen
          </h2>
          <p className="mb-4 text-gray-800 text-sm md:text-base">
            FlyInn does not knowingly collect personally identifiable
            information from children under the age of 13. If you are under the
            age of 13, you must ask your parent or guardian for permission to
            use this platform.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-center text-[#E53935] font-bold text-xl mb-4">
            Email Communications
          </h2>
          <p className="mb-4 text-gray-800 text-sm md:text-base">
            From time to time, FlyInn may contact you via email for the purpose
            of providing training, newsletters, announcements, promotional
            offers, alerts, confirmations, surveys, and/or other general
            communication.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-center text-[#E53935] font-bold text-xl mb-4">
            External Data Storage Sites
          </h2>
          <p className="mb-4 text-gray-800 text-sm md:text-base">
            We may store your data on servers provided by third-party hosting
            vendors with whom we have contracted.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-center text-[#E53935] font-bold text-xl mb-4">
            Changes to This Statement
          </h2>
          <p className="mb-4 text-gray-800 text-sm md:text-base">
            FlyInn reserves the right to change this Policy from time to time.
            For example, when there are changes in our services, changes in our
            data protection practices, or changes in the law. When changes are
            made to this Policy, we will revise the "last updated" date at the
            top of this Policy. We encourage you to periodically review this
            Policy to be informed of how FlyInn is protecting your information.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-10">
          <h2 className="text-center text-[#E53935] font-bold text-xl mb-4">
            Contact Information
          </h2>
          <p className="mb-4 text-gray-800 text-base">
            FlyInn welcomes your questions or comments regarding this Policy. If
            you believe that FlyInn has not adhered to this Policy, please
            contact FlyInn at:
          </p>
          <div className="text-gray-800 text-base space-y-1 mb-4">
            <div>FlyInn, LLC</div>
            <div>P.O. Box 270439</div>
            <div>Fruitland, Utah 84027</div>
          </div>
          <div className="text-gray-800 text-base mb-2">Email Address:</div>
          <div className="text-[#E53935] text-base mb-4">PIC@fly-inn.com</div>
          <div className="text-gray-800 text-base mb-2">Phone Number:</div>
          <div className="text-[#E53935] text-base">321-435-9466</div>
        </section>
      </div>

      {/* Newsletter Section */}
      <NewsletterSection />
    </>
  );
};

export default PrivacyPolicy;
