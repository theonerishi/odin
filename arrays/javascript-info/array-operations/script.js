let styles = ['Jazz', 'Blues'];
styles.push('Rock-and-roll');
styles[Math.floor(styles.length/2)] = 'Classics'; // replaces item in middle of array with 'Classics'
alert(styles.shift()); // removes item from beginning of array and returns it in an alert
styles.unshift('Rap', 'Reggae');
alert(styles)