import EventList from "@/components/events/event-list";
import EventSearch from "../../components/events/events-search";
import { getAllEvents } from "@/dummy-data";
import { Fragment } from "react";
import { useRouter } from "next/router";

const AllEventPages = () => {
  const router = useRouter();
  const allEvents = getAllEvents();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </Fragment>
  );
};

export default AllEventPages;
