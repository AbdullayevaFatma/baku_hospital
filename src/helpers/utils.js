export const getAppointmentListFromLocal= ()=>{
  try {
    return JSON.parse(localStorage.getItem("appointments")) || []
  } catch (error) {
    console.log("Error from localStorage",error);
    return []
  }
}