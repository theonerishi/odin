let styles = ['Jazz', 'Blues'];
styles.push('Rock-and-roll');
styles[Math.floor(styles.length/2)] = 'Classics';
alert(styles.shift());
styles.unshift('Rap', 'Reggae');
alert(styles)