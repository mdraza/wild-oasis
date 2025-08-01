import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex border-primary-800 border">
      <div className="relative lg:flex-1 w-[170px]">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          className="border-r border-primary-800 object-cover"
          fill
        />
      </div>

      <div className="flex-grow">
        <div className="pt-2 lg:pt-5 pb-2 lg:pb-4 px-2 lg:px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-xl lg:text-2xl mb-1 lg:mb-3">
            Cabin {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-3 lg:h-5 w-3 lg:w-5 text-primary-600" />
            <p className="lg:text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-start lg:justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-[20px] lg:text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-[20px] lg:text-3xl font-[350]">
                ${regularPrice}
              </span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 lg:text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-primary-800 py-2 lg:py-4 px-2 lg:px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900 text-[14px] lg:text-[16px]"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
