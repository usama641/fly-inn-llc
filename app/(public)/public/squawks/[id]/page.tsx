"use client";

import React from "react";
import Image from "next/image";
import NewsletterSection from "../../../_components/newsletter-section";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const article = {
  title:
    "4 Promises Fly-Inn.com Hosts Make: Because Pilots Deserve to Be Pampered too.",
  author: "Fly-Inn",
  date: "October, 2024",
  hero: "/lakeview-resort.png",
  images: ["/lakeview-resort.png", "/lakeview-resort.png"],
  keyTakeaways: [
    "Paddington™ is embarking on a journey to Peru with The Brown family, in search of his Aunt Lucy, and while his Windsor Gardens home is left vacant, they've listed it on Airbnb for a special stay.",
    "In celebration of PADDINGTON IN PERU, three families will have the chance to sleepover in The Browns' home in London - living like Paddington for a day, complete with marmalade sandwiches and afternoon tea.",
    "Bookings to stay in the Windsor Gardens home - which will be listed on Airbnb for £0 - open on 3 November 2024 at 9am GMT at airbnb.com/paddington.",
    "PADDINGTON IN PERU is released in UK and Irish cinemas from 8 November 2024.",
  ],
};

const BlogArticlePage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        {/* Hero Image */}
        <div className="w-full rounded-2xl overflow-hidden mb-6">
          <Image
            src={article.hero}
            alt="Hero"
            width={900}
            height={300}
            className="w-full h-64 object-cover"
          />
        </div>
        {/* Title & Meta */}
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{article.title}</h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
          <span>
            By{" "}
            <span className="text-[#b71c1c] font-semibold">
              {article.author}
            </span>
          </span>
          <span>•</span>
          <span>Posted {article.date}</span>
        </div>
        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-6">
          <a href="#" className="text-[#212121] hover:text-[#b71c1c]">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-[#212121] hover:text-[#b71c1c]">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-[#212121] hover:text-[#b71c1c]">
            <FaYoutube size={20} />
          </a>
          <a href="#" className="text-[#212121] hover:text-[#b71c1c]">
            <FaLinkedinIn size={20} />
          </a>
        </div>
        {/* Key Takeaways */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Key Takeaways</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {article.keyTakeaways.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Article Content */}
        <div className="mb-8">
          <div className="w-full rounded-2xl overflow-hidden mb-6">
            <Image
              src={article.images[0]}
              alt="House 1"
              width={900}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
          <h3 className="font-semibold mb-2">
            The standard Lorem Ipsum passage, used since the 1500s
          </h3>
          <p className="mb-4 text-gray-700 text-base">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
            <br />
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </p>
          <p className="mb-4 text-gray-700 text-base">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
          <h3 className="font-semibold mb-2">1914 translation by H. Rackham</h3>
          <p className="mb-4 text-gray-700 text-base">
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?"
          </p>
          <div className="w-full rounded-2xl overflow-hidden mb-6">
            <Image
              src={article.images[1]}
              alt="House 2"
              width={900}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
          <h3 className="font-semibold mb-2">
            Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </h3>
          <p className="mb-4 text-gray-700 text-base">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </p>
        </div>
      </main>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default BlogArticlePage;
