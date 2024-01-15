import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  /** By default an ordinary fetch function in nextjs has its inbuilt
   * caching activated, to gain more control over caching, you can add an extra param
   * after the url param, in this scenario, we will add a param that will allow for
   * fetching of new data after every 60 seconds.
   *
   * Note: the caching behaviour is only implemented in the fetch function, if a
   * third party library like axios is used, we will not get data caching.
   */
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // next: { revalidate: 60 },
    cache: "no-store",
  });
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
