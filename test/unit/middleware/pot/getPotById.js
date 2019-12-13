const expect = require('chai').expect;
const getPotByIdMW = require('../../../../middleware/pot/getPotById');

describe('getPotById middleware ', function () {

    it('should return a pot', function (done) {
        const req = {
            params: {
                potid: '15'
            }
        };
        const res = {
            locals: {}
        };
        const fakePotModel = {
            findOne: (some, callBack) => {
                expect(some).to.be.eql({ _id: '15' });
                callBack(null, 'mockPot');
            }
        }

        const mw = getPotByIdMW({
            PotModel: fakePotModel
        });

        mw(req, res, (err) => {
            expect(err).to.be.eql(undefined);
            expect(res.locals).to.be.eql({ pot: 'mockPot' });
            done();
        });
    });

    it('should call next with error, when there is a db problem', function(done) {
        const req = {
            params: {
                potid: '15'
            }
        };
        const res = {
            locals: {}
        };
        const fakePotModel = {
            findOne: (some, callBack) => {
                expect(some).to.be.eql({ _id: '15' });
                callBack('db_problem', null);
            }
        }

        const mw = getPotByIdMW({
            PotModel: fakePotModel
        });

        mw(req, res, (err) => {
            expect(err).to.be.eql('db_problem');
            done();
        });
    });

    it('should call next, when no pot is found in the db', function(done) {
        const req = {
            params: {
                potid: '15'
            }
        };
        const res = {
            locals: {}
        };
        const fakePotModel = {
            findOne: (some, callBack) => {
                expect(some).to.be.eql({ _id: '15' });
                callBack(undefined, undefined);
            }
        }

        const mw = getPotByIdMW({
            PotModel: fakePotModel
        });

        mw(req, res, (err) => {
            expect(err).to.be.eql(undefined);
            expect(res.locals).to.be.eql({});
            done();
        });
    });
});