const sinon = require('sinon');
const chai = require('chai');
const { expect } = chai;

const eventController = require('../controllers/eventController');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('Event Controller Tests', () => {
  describe('getAllEvents', () => {
    it('should return all events', async () => {
      const eventMock = {
        find: sinon.stub().resolves([{ name: 'Event 1' }, { name: 'Event 2' }]),
      };
      const req = {};
      const res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis(),
      };

      await eventController.getAllEvents(req, res);

      expect(res.json).to.be.calledOnceWithExactly([{ name: 'Event 1' }, { name: 'Event 2' }]);
    });
    it('should handle errors when getting all events', async () => {
      const eventMock = {
        find: sinon.stub().rejects(new Error('Database Error')),
      };
      const req = {};
      const res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis(),
      };

      await eventController.getAllEvents(req, res);

      expect(res.status).to.be.calledOnceWithExactly(500);
      expect(res.json).to.be.calledOnceWithExactly({ message: 'Failed to get all events' });
    });
  });

  describe('getEventByUserId', () => {
    it('should return event by userId', async () => {
      const eventMock = {
        findOne: sinon.stub().resolves({ name: 'Event 1' }),
      };
      const req = {
        params: { userId: '123' },
      };
      const res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis(),
      };

      await eventController.getEventByUserId(req, res);

      expect(res.json).to.be.calledOnceWithExactly({ name: 'Event 1' });
    });
    it('should handle errors when getting event by userId', async () => {
      const eventMock = {
        findOne: sinon.stub().rejects(new Error('Database Error')),
      };
      const req = {
        params: { userId: '123' },
      };
      const res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis(),
      };

      await eventController.getEventByUserId(req, res);

      expect(res.status).to.be.calledOnceWithExactly(500);
      expect(res.json).to.be.calledOnceWithExactly({ message: 'Failed to get event' });
    });
  });

  // Add similar tests for the remaining controller functions...

});