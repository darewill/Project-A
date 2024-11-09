import React, { useEffect, useState } from "react";
import "../style/Users.css";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const usersPerPage = 4;

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://dummyjson.com/users?limit=${usersPerPage}&skip=${
          (currentPage - 1) * usersPerPage
        }`
      );
      const data = await response.json();
      setUsers(data.users);
      setTotalPages(Math.ceil(data.total / usersPerPage));
    };

    fetchUsers();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleNext = () => handlePageChange(currentPage + 1);
  const handlePrev = () => handlePageChange(currentPage - 1);

  return (
    <div>
      <div className="flex justify-center">
      <h1 className=" m-auto text-[25px] pl-[50px]">Users</h1>
      <h1 className="m-[20px] text-[25px] text-[#8d8d8d]">{currentPage}</h1>
      </div>
      <ul className="columns-2">
        {users.map((user) => (
          <li>
            <div className="users-wrapper text-center bg-[#f3f3f3] p-[30px] mb-[20px] rounded-xl hover:bg-[#7bd78c] transition-colors ">
              <div className="user-info flex flex-col mr-[10px] items-center mb-[20px]">
                <p>{user.username}</p>
                <h2 className="">
                  {user.firstName} {user.lastName}
                </h2>
                <h2 className="">{user.email}</h2>
                <h2 className="">{user.phone}</h2>
                <img src={user.image} className="user-icon" />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={handlePrev} className="active:bg-[#7bd78c]"/>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" onClick={handleNext} className="active:bg-[#7bd78c]"/>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
