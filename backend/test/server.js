var chai = require("chai");
var request = require("request");
var chaiHttp = require('chai-http');
var app = require('../dist/index');
const { expect, should, have, to, be, a, length, gte } = require("chai");

chai.use(chaiHttp);

function randBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

describe('/GET veiculo', function () {
    it('retorna lista de veículos.', function (done) {
        chai.request(app)
            .get('/veiculo')
            .end(function (error, res) {
                expect(res).have.status(200);
                expect(res.body.data).be.an('array');
                expect(res.body.data).have.length.be.gte(0);
                done();
            });
    });
});

describe('/POST veiculo', function () {
    it('adiciona veículo', function (done) {



        let veiculo = {
            "ano": `${randBetween(1, 9999)}`
            , "placa": `TST-${randBetween(1, 9999)}`
            , "marca": "TESTES"
            , "modelo": "BOM"
            , "chassi": `TSTCHASSI09098094${randBetween(1, 9999)}`
            , "renavam": `TSTRENAVAM098${randBetween(1, 9999)}`
        }

        chai.request(app)
            .post('/veiculo')
            .send(veiculo)
            .end(function (error, res) {
                expect(res).have.status(200);

                expect(res.body).be.an('object');
                expect(res.body).to.have.property("chassi");
                expect(res.body).to.have.property("id");
                expect(res.body).to.have.property("renavam");
                expect(res.body).to.have.property("marca");
                expect(res.body).to.have.property("placa");
                expect(res.body).to.have.property("modelo");
                done();
            });
    });
});


describe('/PATCH veiculo', function () {
    it('update veiculo - chassi', function (done) {
        function randBetween(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        let veiculo = {
            "id": 17,
            "chassi": "345633563546",
        }
        chai.request(app)
            .patch(`/veiculo/${veiculo.id}`)
            .send(veiculo)
            .end(function (error, res) {
                expect(res).have.status(200);
                expect(res.body.data).be.an('object');
                expect(res.body.data).to.have.property("chassi");
                expect(res.body.data).to.have.property("id");
                expect(res.body.data).to.have.property("renavam");
                expect(res.body.data).to.have.property("marca");
                expect(res.body.data).to.have.property("placa");
                expect(res.body.data).to.have.property("modelo");
                done();
            });
    })
    it('update veiculo - renavam', function (done) {
        function randBetween(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        let veiculo = {
            "id": 17,
            "renavam": "8975234098572074",
        }
        chai.request(app)
            .patch(`/veiculo/${veiculo.id}`)
            .send(veiculo)
            .end(function (error, res) {
                expect(res).have.status(200);
                expect(res.body.data).be.an('object');
                expect(res.body.data).to.have.property("chassi");
                expect(res.body.data).to.have.property("id");
                expect(res.body.data).to.have.property("renavam");
                expect(res.body.data).to.have.property("marca");
                expect(res.body.data).to.have.property("placa");
                expect(res.body.data).to.have.property("modelo");
                done();
            });
    })

    it('update veiculo - placa', function (done) {
        function randBetween(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        let veiculo = {
            "id": 17,
            "placa": "TST-0009",
        }
        chai.request(app)
            .patch(`/veiculo/${veiculo.id}`)
            .send(veiculo)
            .end(function (error, res) {
                expect(res).have.status(200);
                expect(res.body.data).be.an('object');
                expect(res.body.data).to.have.property("chassi");
                expect(res.body.data).to.have.property("id");
                expect(res.body.data).to.have.property("renavam");
                expect(res.body.data).to.have.property("marca");
                expect(res.body.data).to.have.property("placa");
                expect(res.body.data).to.have.property("modelo");
                done();
            });
    });
});


describe('/DELETE veiculo', function () {

    it('buscando lista de veículos', (done) => {
        chai.request(app)
            .get('/veiculo')
            .end(function (error, res) {
                let id = randBetween(0, res.body.data.length - 1);


                describe(`removendo veiculo de id ${id}`, () => {
                    it('removendo item', (done) => {
                        chai.request(app)
                            .delete(`/veiculo/${id}`)
                            .end(function (error, res) {
                                expect(res.body).to.be.an('object');
                                expect(res.body).to.be.property('success');
                                done();
                            });
                    });
                });
                done();
            });
    });
});
