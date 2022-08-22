let monate = [
	'Januar',
	'Februar',
	'März',
	'April',
	'Mai',
	'Juni',
	'Juli',
	'August',
	'September',
	'Oktober',
	'November',
	'Dezember',
];

let wochenTag = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

const day = new Date();

// day.getTime();
document.getElementById('output').innerHTML = day;

// Verwende den Code aus dem Kommentarbereich, um den Wochentag und Monat anzuzeigen.
// Hinweis: du siehst hier das aktuelle Datum des Screenshots! Dein Ergebnis orientiert sich an dem aktuellen Datum.

// Erstelle ein schönes CSS-Design für Deine elektronische Uhr und füge ein festes Datum ein. Dieses Design werden wir später verwenden um eine funktionierende Uhr zu bauen!
// Beispiel:

document.getElementById('output').appendChild(day.getFullYear());
document.getElementById('output').appendChild(day.getMonth());
document.getElementById('output').appendChild(day.getDate());
document.getElementById('output').appendChild(day.getHours());
document.getElementById('output').appendChild(day.getMinutes());
document.getElementById('output').appendChild(day.getSeconds());
document.getElementById('output').appendChild(day.getMilliseconds());
document.getElementById('output').appendChild(day.getTime());
document.getElementById('output').appendChild(day.getDay());
document.getElementById('output').appendChild(day.Date.now());

// Mon Aug 22 2022 14:22:50 GMT+0200 (Mitteleuropäische Sommerzeit)
