"use strict";
const expect = require('chai').expect;
const getCacutsMW = require('../../../../middleware/cactus/getCactus');
describe('getCactus middleware ', function () {
    it('should return a cactus', function (done) {
        const req = {
            params: {
                cactusid: '4'
            }
        };
        const res = {
            locals: {}
        };
        const fakeCactusModel = {
            findOne: (some, callBack) => {
                expect(some).to.be.eql({ _id: '4' });
                callBack(null, 'mockCactus');
            }
        };
        const mw = getCacutsMW({
            CactusModel: fakeCactusModel
        });
        mw(req, res, (err) => {
            expect(err).to.be.eql(undefined);
            expect(res.locals).to.be.eql({ cactus: 'mockCactus' });
            done();
        });
    });
    it('should call next with error, when there is a db problem', function (done) {
        const req = {
            params: {
                cactusid: '4'
            }
        };
        const res = {
            locals: {}
        };
        const fakeCactusModel = {
            findOne: (some, callBack) => {
                expect(some).to.be.eql({ _id: '4' });
                callBack('db_problem', null);
            }
        };
        const mw = getCacutsMW({
            CactusModel: fakeCactusModel
        });
        mw(req, res, (err) => {
            expect(err).to.be.eql('db_problem');
            done();
        });
    });
    it('should call next, when no cactus is found in the db', function (done) {
        const req = {
            params: {
                cactusid: '4'
            }
        };
        const res = {
            locals: {}
        };
        const fakeCactusModel = {
            findOne: (some, callBack) => {
                expect(some).to.be.eql({ _id: '4' });
                callBack(undefined, undefined);
            }
        };
        const mw = getCacutsMW({
            CactusModel: fakeCactusModel
        });
        mw(req, res, (err) => {
            expect(err).to.be.eql(undefined);
            expect(res.locals).to.be.eql({});
            done();
        });
    });
});
