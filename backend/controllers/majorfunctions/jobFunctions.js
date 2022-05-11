const moment = require('moment');

/*@Desc This function serves to get the job status  */
function getJobStatus(start_date, is_completed_status, main_category) {
  if (is_completed_status === true) {
    return 'Completed';
  }
  if (main_category === 'Website Development') {
    return 'Pending';
  }
  const date1 = moment(start_date);
  const date2 = moment();
  var duration = moment.duration(date2.diff(date1));
  var diffInDays = duration.asDays();
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
    return moment(start_date).fromNow();
  }
  const date1 = moment(start_date);
  const date2 = moment();
  var duration = moment.duration(date2.diff(date1));
  var diffInDays = duration.asDays();
  if (diffInDays < 2) {
    return moment(start_date).fromNow();
  } else {
    return moment(start_date).fromNow();
  }
}

module.exports = {
  getJobStatus,
  getHowLate,
};
