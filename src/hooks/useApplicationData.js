import { useEffect, useState } from "react";
import axios from "axios";
export default function useApplicationData(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  function updateSpots(state) {
    const currentDay = state.days.find((day) => day.name === state.day);
    const newDays = [...state.days];
    const currentDayId = newDays.findIndex((day) => day.name === state.day);
    const findApplist = currentDay.appointments.map(
      (id) => state.appointments[id]
    );
    const findEmptyAppList = findApplist.filter(
      (app) => app.interview === null
    );
    const spots = findEmptyAppList.length;
    const newCurrentDay = { ...currentDay, spots };
    newDays[currentDayId] = newCurrentDay;
    const newState = { ...state, days: newDays };
    return newState;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`/api/appointments/${id}`, appointment).then(() => {
      const newState = { ...state, appointments };
      setState(updateSpots(newState));
    });
  }

  function cancelInterview(id) {
    const appointment = { ...state.appointments[id], interview: null };
    const appointments = { ...state.appointments, [id]: appointment };
    return axios.delete(`/api/appointments/${id}`, appointment).then(() => {
      const newState = { ...state, appointments };
      setState(updateSpots(newState));
    });
  }

  return { state, setDay, bookInterview, cancelInterview };
}
