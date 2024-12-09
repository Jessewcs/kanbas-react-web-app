import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PeopleTable from "./Table";
import * as client from "../client";

export default function People() {
  const { cid } = useParams();
  const [users, setUsers] = useState([]);

  const fetchUsersForCourse = async () => {
    try {
      const users = await client.findUsersForCourse(cid as string);
      setUsers(users);
    } catch (error) {
      console.error("Error fetching users for course:", error);
    }
  };

  useEffect(() => {
    if (cid) {
      fetchUsersForCourse();
    }
  }, [cid]);

  return <PeopleTable users={users} />;
}