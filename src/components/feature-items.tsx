// import Image from "next/image";
// import Link from "next/link";
// import readingTime from "reading-time";
// import Moment from "./ui/moment";

// export type Item = {
//   url: string;
//   title: string;
//   text?: string;
//   category?: string;
//   image?: string;
//   plainText?: string;
//   date: string;
// };

// export type Items = Item[];

// interface FeatureitemsProps {
//   items: Items;
//   title?: string;
// }
// export function FeatureItems({ items, title }: FeatureitemsProps) {
//   const firstItem = items[0];
//   return (
//     <section className="space-y-6">
//       {title && (
//         <h2 className="font-title text-lg font-medium md:text-xl lg:text-2xl">
//           {title}
//         </h2>
//       )}
//       <div className="md:flex md:items-start md:gap-x-24 md:gap-y-0">
//         {/* ITEM LAYOUT ONE  */}
//         <article className="relative max-w-sm flex-1 space-y-4 bg-green-300">
//           {firstItem.image && (
//             <Image
//               src={firstItem.image}
//               alt={`${firstItem.title} cover image`}
//               width={400}
//               height={100}
//               className="aspect-1/0.5"
//             />
//           )}
//           <div className="space-y-3">
//             <ItemMeta date={firstItem.date} plainText={firstItem.plainText} />
//             <h3 className="font-bold capitalize md:text-lg lg:text-xl">
//               {firstItem.title}
//             </h3>
//             {firstItem.text && (
//               <p className="text-muted-foreground line-clamp-3 text-sm">
//                 {firstItem.text}
//               </p>
//             )}
//           </div>
//           <Link href={firstItem.url} className="absolute inset-0">
//             <span className="sr-only">Click to read {firstItem.title}</span>
//           </Link>
//         </article>
//         <div className="flex-1 space-y-3 bg-red-400">
//           {items.slice(1).map((item) => (
//             // ITEM LAYOUT 2
//             <article key={item.url} className="relative w-fit flex gap-6">
//               {item.image && (
//                 <Image
//                   src={item.image}
//                   alt="item cover image"
//                   width={402}
//                   height={202}
//                   className="size-20 rounded-md md:size-24"
//                 />
//               )}
//               <div className="flex flex-col justify-center gap-y-2">
//                 <h3 className="line-clamp-2 font-title capitalize">{item.title}</h3>
//                 {item.text && (
//                   <p className="text-muted-foreground line-clamp-3 text-sm max-md:hidden">
//                     {item.text}
//                   </p>
//                 )}
//                 <ItemMeta
//                   date={firstItem.date}
//                   plainText={firstItem.plainText}
//                 />
//               </div>
//               <Link href={item.url} className="absolute inset-0">
//                 <span className="sr-only">Click to read {item.title}</span>
//               </Link>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// type ItemMetaProps = {
//   date?: string;
//   plainText?: string;
// };

// function ItemMeta({ date, plainText }: ItemMetaProps) {
//   if (!date && !plainText) return null;
//   return (
//     <div className="flex space-x-2 text-sm text-copy-light">
//       {date && <Moment format="MMMM D, YYYY" date={date} />}
//       {date && plainText && plainText && <span aria-hidden>&#x2022;</span>}
//       {plainText && <p>{readingTime(plainText).text}</p>}
//     </div>
//   );
// }
