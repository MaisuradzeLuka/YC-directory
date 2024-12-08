import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Author, Startup } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    category,
    slug,
    image,
    author,
    title,
    _id,
    views,
    description,
  } = post;

  return (
    <li className="startup-card">
      <div className="flex-between">
        <span className="startup-card_date">{formatDate(_createdAt)}</span>

        <div className="flex-between gap-3 ">
          <EyeIcon className="text-primary" />
          <span>{views}</span>
        </div>
      </div>

      <div className="flex-between my-4">
        <p className=" text-lg font-medium">{author?.name}</p>

        <Image
          src={author?.image!}
          width={48}
          height={48}
          className="rounded-full"
          alt="author profile"
        />
      </div>

      <h3 className="text-2xl font-semibold">{title}</h3>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>

        <Image
          src={image!}
          alt="placeholder"
          width={240}
          height={240}
          className="startup-card_img"
        />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>

        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
