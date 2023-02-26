export function getAppointmentsForDay(state, day) {
  const finalApps = [];
  state.days.map((today) => {
    if (today.name === day) {
      today.appointments.map((app) => finalApps.push(state.appointments[app]));
    }
    return null;
  });
  return finalApps;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const finalInterview = {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  };
  return finalInterview;
}

export function getInterviewersForDay(state, day) {
  const finalInts = [];
  state.days.map((today) => {
    if (today.name === day) {
      today.interviewers.map((app) => finalInts.push(state.interviewers[app]));
    }
    return null;
  });
  return finalInts;
}
