let fs = require('fs');
var os = require('os');

class UsersStaticWebpageGenerator {
  generateFile(users) {
    var stream = fs.createWriteStream('html/users.html', { flags: 'w' });
    var writeln = createWriteln(stream);

    writeln('<!doctype html>');
    writeln('<html lang="en">');
    writeln('<head>');
    writeln('<meta charset="utf-8">');
    writeln(
      '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'
    );

    writeln('<title>User biographies</title>');

    writeln('<!-- Bootstrap core CSS -->');
    writeln(
      '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">'
    );

    writeln('<!-- Custom styles for this template -->');
    writeln('<link href="assets/cover.css" rel="stylesheet">');
    writeln('</head>');

    writeln('<body class="text-center">');

    writeln(
      '<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">'
    );
    writeln('<header class="masthead mb-auto">');
    writeln('<div class="inner">');
    writeln('<h3 class="masthead-brand">Users Biography</h3>');
    writeln('<nav class="nav nav-masthead justify-content-center">');
    writeln('<a class="nav-link active" href="#">Home</a>');
    writeln('<a class="nav-link" href="#">Features</a>');
    writeln('<a class="nav-link" href="#">Contact</a>');
    writeln('</nav>');
    writeln('</div>');
    writeln('</header>');

    writeln('<main role="main" class="inner cover">');
    users.forEach((user) => {
      const userInfoBlockContent = this.createUserInfoBlock(user);
      writeln(userInfoBlockContent);
    });
    writeln('</main>');

    writeln('<footer class="mastfoot mt-auto">');
    writeln('<div class="inner">');
    writeln(
      '<p>Sprout class kata created by Codium <a href="https://twitter.com/CodiumTeam">@CodiumTeam</a>. Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>'
    );
    writeln('</div>');
    writeln('</footer>');
    writeln('</div>');

    writeln('<!-- Bootstrap core JavaScript');
    writeln('        ================================================== -->');
    writeln(
      '<!-- Placed at the end of the document so the pages load faster -->'
    );
    writeln(
      '<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>'
    );
    writeln(
      '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>'
    );
    writeln(
      '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>'
    );
    writeln('</body>');
    writeln('</html>');

    stream.end();
  }
  createUserInfoBlock(user) {
    const userBiography = user.getBiography();

    return `
      <h1 class="cover-heading">
        ${user.getName()}
        ${this.createScoreButtons(userBiography)}
      </h1>

      ${this.createUserLocalizationBlock(userBiography)}
      ${this.createUserCommunityManagerRole(userBiography)}

      <p class="lead">${userBiography}</p>
    `;
  }

  createScoreButtons(userBiography) {
    const keyWords = [
      'edición',
      'sociedad',
      'mundo',
      'libro',
      'texto',
      'revista',
      'valores',
      'educación',
      'teatro',
      'social',
    ];
    const userBiographyWords = userBiography.split(' ');
    const filteredUserBiographyWords = userBiographyWords.filter((word) => {
      const cleanedWord = word.replace(/\.|,/, '').toLowerCase().trim();

      return keyWords.includes(cleanedWord);
    });
    const score = filteredUserBiographyWords.length;

    return `
    <button type="button" class="btn btn-warning">
      Score <span class="badge badge-light">${score}</span>
      <span class="sr-only">keywords found</span>
    </button>`;
  }

  createUserLocalizationBlock(userBiography) {
    const availableLocalization = [
      'Barcelona',
      'Madrid',
      'Granada',
      'Vigo',
      'Palma de Mallorca',
    ];

    const userLocalization = this.findArrayItemInBiography(
      availableLocalization,
      userBiography
    );

    if (!userLocalization) return '';

    return `
      <span class="badge badge-pill badge-info">${userLocalization}</span>
    `;
  }

  createUserCommunityManagerRole(userBiography) {
    const roles = ['community manager'];
    let userRole = this.findArrayItemInBiography(roles, userBiography);

    if (!userRole) return '';

    const capitalizedRole =
      userRole.charAt(0).toUpperCase() + userRole.slice(1);

    return `
       <span class="badge badge-pill badge-danger">${capitalizedRole}</span>
    `;
  }

  findArrayItemInBiography(array, biography) {
    for (let index = 0; index < array.length; index++) {
      const item = array[index];

      if (biography.includes(item)) {
        return item;
      }
    }

    return '';
  }
}

function createWriteln(stream) {
  return function writeln(text) {
    stream.write(text + os.EOL);
  };
}

module.exports = UsersStaticWebpageGenerator;
