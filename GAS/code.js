function start() {
    const spreadsheet = SpreadsheetApp.openById(SpreadsheetID);
    const sheet = spreadsheet.getSheetByName(SheetName);
    const range = sheet.getRange("5:5");

    const list = range.getValues();

    let data = getMainList(list[0]);
    data.list = setNewList(data.list);

    range.setValues([setList(data, list[0].length)]);

    sheet.getRange("B3").setValue(getNowTime());
}