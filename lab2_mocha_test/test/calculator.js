// Lab Ex02 - Mocha Chai Tests

const chai = require('chai')
const expect = chai.expect

const app = require('../app/calculator')

describe('App', () => {
	describe('Addition', () => {
		it('add(5, 2) expected result 7 PASS', () => {
			expect(app.add(5, 2)).to.equal(7)
		})
		it('add(5,2) expected result 8 FAIL', () => {
			expect(app.add(5, 2)).to.equal(8)
		})
		
	})

	describe('Subtraction', () => {
		it('sub(5, 2) expected result 3 PASS ', () => {
			expect(app.sub(5, 2)).to.equal(3)
		})
		it('sub(5, 2) expected result 5 FAIL ', () => {
			expect(app.sub(5, 2)).to.equal(5)
		})
		
	})

	describe('Multiplication', () => {
		it('mul(5, 2) expected result 10 PASS', () => {
			expect(app.mul(5, 2)).to.equal(10)
		})
		it('mul(5, 2) expected result 12 FAIL', () => {
			expect(app.mul(5, 2)).to.equal(12)
		})
		
	})

	describe('Division', () => {
		it('div(10, 2) expected result 5 PASS', () => {
			expect(app.div(10, 2)).to.equal(5)
		})
		it('div(10,2) expected result 2 FAIL', () => {
			expect(app.div(10, 2)).to.equal(2)
		})
		
	})
})