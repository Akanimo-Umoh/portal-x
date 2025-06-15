// "use client";

// import { register } from "@/actions/auth";
// import Image from "next/image";
// import Link from "next/link";
// import { useActionState } from "react";

// export default function Register() {
//   const [state, isPending] = useActionState(register, undefined);
//   return (
//     <div>
//       <div className="px-[25px] mt-[33px]">
//         <div className="jakarta">
//           <p className="text-[20px] font-bold leading-6 text-(--secondary-bg)">
//             Join the Beta
//           </p>
//           <p className="text-[12px] leading-6 text-(--primary-text)">
//             Be among our Beta to enjoy unlimited offers of events
//           </p>
//         </div>

//         <form action="" className="space-y-4 pb-4">
//           <div className="">
//             <label htmlFor="firstName" className="text-[14px]">
//               First Name
//             </label>
//             <div className="flex items-center rounded-[5px]">
//               <Image src="/user.svg" width={20} height={20} alt="user" />
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name"
//                 defaultValue={state?.firstName}
//                 className="border-[2px] w-full p-1.5 placeholder-(--input)"
//               />
//             </div>
//             {state?.errors?.email && (
//               <p className="text-red-600 text-sm">{state.errors.email}</p>
//             )}
//           </div>

//           <div className="">
//             <label htmlFor="email" className="">
//               Email
//             </label>

//             <div>
//               <Image src="/mail.svg" width={20} height={20} alt="user" />
//               <input
//                 type="text"
//                 name="email"
//                 defaultValue={state?.email}
//                 className="border-[2px] border-gray-300 rounded-[5px] w-full p-1.5 outline-blue-600"
//               />
//             </div>
//             {state?.errors?.email && (
//               <p className="text-red-600 text-sm">{state.errors.email}</p>
//             )}
//           </div>

//           <div className="">
//             <label htmlFor="password" className="">
//               Password
//             </label>

//             <div>
//               <Image src="/lock.svg" width={20} height={20} alt="password" />
//               <input
//                 type="password"
//                 name="password"
//                 className="border-2 border-gray-300 rounded-[5px] w-full p-1.5 outline-blue-600"
//               />
//             </div>
//             {state?.errors?.email && (
//               <div className="text-red-600 text-sm">
//                 <p>Password must be:</p>
//                 <ul className="list-disc list-inside ml-4">
//                   {state.errors.password.map((err) => (
//                     <li key={err}>{err}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           <div>
//             <label
//               htmlFor="confirmPassword"
//               className=""
//             >
//               Confirm Password
//             </label>

//             <div>
//               <Image src="/lock" width={20} height={20} alt="password" />
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 className="border-2 border-gray-300 rounded-[5px] w-full p-1.5 outline-blue-600"
//               />
//             </div>
//             {state?.errors?.confirmPassword && (
//               <p className="text-red-600 text-sm">
//                 {state.errors.confirmPassword}
//               </p>
//             )}
//           </div>

//           <div className="flex items-end gap-4">
//             <button
//               disabled={isPending}
//               className="text-white px-14 py-1 bg-blue-600 cursor-pointer hover:bg-blue-700 disabled:bg-blue-200 disabled:cursor-not-allowed active:ring-2 ring-offset-1 shadow-sm rounded-md"
//             >
//               {!isPending ? "Loading..." : "Register"}
//             </button>

//             <Link href={"/"} className="text-link">
//               or login here
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
