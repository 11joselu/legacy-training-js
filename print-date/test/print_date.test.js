const assert = require('assert');
const sinon = require('sinon');

const PrintDate = require('../src/print_date');
const Calendar = require('../src/calendar');
const Printer = require('../src/printer');

describe('PrintDate', function () {
  it('Should print today date with sinon', function () {
    const today = new Date();
    const printer = new Printer();
    const printLineSpy = sinon.spy(printer, 'printLine');
    const calendar = sinon.createStubInstance(Calendar, {
      today: today,
    });
    const printDate = new PrintDate(calendar, printer);

    printDate.printCurrentDate();

    assert(printLineSpy.calledWith(today));
  });

  it('Should print today date without sinon', function () {
    const today = new Date();
    const printer = {
      printLine: jest.fn(),
    };

    const calendar = {
      today() {
        return today;
      },
    };
    const printDate = new PrintDate(calendar, printer);

    printDate.printCurrentDate();

    expect(printer.printLine).toHaveBeenCalledWith(today);
  });

  it('example using test doubles with Sinon', function () {
    let calendar = new Calendar();
    let spy = sinon.spy(calendar, 'today');
    let printDate = new PrintDate(calendar, new Printer());

    printDate.printCurrentDate();

    assert(spy.calledOnce);
  });
});
