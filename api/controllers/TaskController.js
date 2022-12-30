/**
 * TaskController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {
  createTask: async function (req, res) {
    try {
      console.log('INSIDE THE CONTROLLER');
      const body = {
        summary: 'test task 1',
        end: {
          dateTime: '2022-12-16T09:00:00-07:00',
          timeZone: 'Asia/Kolkata'
        },
        start: {
          dateTime: '2022-12-16T08:00:00-07:00',
          timeZone: 'Asia/Kolkata'
        }
      };
      console.log(body);
      const calendarId = 'yashasva.dev@gmail.com';
      console.log(calendarId);

      // console.log(auth.credentials)
      console.log(auth);
      console.log(url);
      // const calendar = google.calendar({version: 'v3', auth: 'AIzaSyD73mhV7cKphC2xc41uf3xQhvFtiWa4ovo'});
      // console.log(calendar);
      // calendar.events.insert({
      //   calendarId: calendarId,
      //   key: 'AIzaSyD73mhV7cKphC2xc41uf3xQhvFtiWa4ovo',
      //   resource: body
      // }, (err, event) => {
      //   if(err) {
      //     console.log('THERE WAS AN ERROR', err);
      //   }
      //   console.log('Event created: %s', event);
      // });
      //const eventResponse = await axios.post(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=AIzaSyD73mhV7cKphC2xc41uf3xQhvFtiWa4ovo`, body);
      return res.status(200).send();
    } catch (error) {
      return res.serverError(error).send('Something went wrong');
    }
  },
  editTask: function(req,res){
    try {

    } catch (error) {
      return res.serverError(error).send('Something went wrong');
    }
  },
  getTaskDetails: function(req, res) {
    try {
    } catch (error) {
      return res.serverError(error).send('Something went wrong');
    }
  },
  deleteTask: function(req,res) {
    try {

    } catch (error) {
      return res.serverError(error).send('Something went wrong');
    }
  }
};

