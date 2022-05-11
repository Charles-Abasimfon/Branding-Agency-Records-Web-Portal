/*@Desc This function serves to get the job status  */
function getJobStatus(start_date, is_completed_status, main_category) {
  if (is_completed_status === true) {
    return 'Completed';
  }
  if (main_category === 'Website Development') {
    return 'Pending';
  }

  const date1 = new Date(start_date);
  const date2 = new Date();
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = date2.getTime() - date1.getTime();
  const diffInDays = diffInTime / oneDay;
  if (diffInDays < 2) {
    return 'Pending';
  }
  if (diffInDays > 2) {
    return 'Late';
  }
}

/*@Desc This function serves to get how late a job is  */
function getHowLate(start_date, is_completed_status, main_category) {
  if (is_completed_status === true) {
    return 'Completed';
  }
  if (main_category === 'Website Development') {
    return '-';
  }
  const date1 = new Date(start_date);
  const date2 = new Date();
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = date2.getTime() - date1.getTime();
  const diffInDays = diffInTime / oneDay;
  if (diffInDays < 2) {
    return 'Under 48 Hours';
  }
  if (diffInDays > 30) {
    return 'Over 1 Month';
  }
  if (diffInDays > 14) {
    return 'Over 2 Weeks';
  }
  if (diffInDays > 7) {
    return 'Over 1 Week';
  }
  if (diffInDays > 3) {
    return 'Over 72 Hours';
  }
  if (diffInDays > 2) {
    return 'Over 48 Hours';
  }
}

module.exports = {
  getJobStatus,
  getHowLate,
};
