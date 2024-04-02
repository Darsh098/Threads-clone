"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: string;
  showButton: boolean;
}
const UserCard = ({
  id,
  name,
  username,
  imgUrl,
  personType,
  showButton,
}: Props) => {
  const router = useRouter();
  const isCommunity = personType === "Community";

  return (
    <article className="user-card">
      <div className="user-card_avatar">
        <div className="relative h-12 w-12">
          <Image
            src={imgUrl}
            alt="Profile Photo"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex-1 text-ellipsis">
          {showButton === false ? (
            <Link href={isCommunity ? `/communities/${id}` : `/profile/${id}`}>
              <h4 className="text-base-semibold text-light-1">{name}</h4>
              <p className="text-small-medium text-gray-1">@{username}</p>
            </Link>
          ) : (
            <>
              <h4 className="text-base-semibold text-light-1">{name}</h4>
              <p className="text-small-medium text-gray-1">@{username}</p>
            </>
          )}
        </div>
      </div>

      {showButton !== false && (
        <Button
          className="user-card_btn"
          onClick={() => {
            if (isCommunity) {
              router.push(`/communities/${id}`);
            } else {
              router.push(`/profile/${id}`);
            }
          }}
        >
          View
        </Button>
      )}
    </article>
  );
};

export default UserCard;
