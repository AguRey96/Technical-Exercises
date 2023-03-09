/*
AD_Window
|--------------| 
| AD_Window_ID |
|--------------|
| ID           |
| Name         |
| ...          |
|--------------|
        |
        |
        |
AD_Tab
|--------------|
| AD_Tab_ID    |
|--------------|
| ID           |
| Name         |
| AD_Window_ID |
| ...          |
|--------------|
        |
        |
        |
AD_Field
|--------------|
| AD_Field_ID    |
|--------------|
| ID           |
| AD_Tab_ID    |
| ...          |
|--------------|
*/

/*
1. Name of window with AD_Window_ID = ‘100’
*/
SELECT Name FROM AD_Window WHERE AD_Window_ID = '100';

/*
2. Update window with AD_Window_ID = ‘100’ appending ‘--’ to the name of window with AD_Window_ID = ‘100’
*/
UPDATE AD_Window
SET Name = CONCAT(Name, '--')
WHERE AD_Window_ID = '100';

/*
3. List of all tabs in window with AD_Window_ID = ‘100’
*/
SELECT * FROM AD_Tab
WHERE AD_Window_ID = '100'

/*
4. List of tab name + field name of all tabs in AD_Window_ID = ‘100’ sorted by tab name and field name
*/

SELECT tab.name AS TabName, field.name AS FieldName
FROM AD_Window win
JOIN AD_Tab tab ON tab.AD_Window_ID = win.AD_Window_ID
JOIN AD_Field field ON tab.ID = field.AD_Tab_ID
WHERE win.AD_Window_ID = '100'
ORDER BY tab.Name, field.Name;

/*
5. Name and number of tabs of all windows
*/

SELECT win.Name AS WindowName, COUNT(tab.ID) AS NumTabs
FROM AD_Window win
LEFT JOIN AD_Tab tab ON tab.AD_Window_ID = win.AD_Window_ID
GROUP BY win.Name;

/*
6. List of all windows with its number of fields, sorting by number of fields starting by the windows with a higher number of them
*/

SELECT win.name AS WindowName, COUNT(field.ID) AS NumFIelds
FROM AD_Window win
LEFT JOIN AD_Tab tab ON tab.AD_Window_ID = win.AD_Window_ID
LEFT JOIN AD_Field field ON tab.ID = field.AD_Tab_ID
GROUP BY win.ID, win.name
ORDER BY NumFields DESC;

/*
7. Windows with more than 5 tabs
*/

SELECT win.Name AS WindowName
FROM AD_Window win
JOIN AD_Tab tab ON tab.AD_Window_ID = win.AD_Window_ID
GROUP BY win.AD_Window_ID, win.Name
HAVING COUNT(tab.ID) > 5;