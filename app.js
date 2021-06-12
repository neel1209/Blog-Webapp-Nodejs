const express = require('express');
const bodyParser = require('express');

const app = express();

const firstHeading = "Home";
const firstContent = "Proin venenatis at tellus ut pharetra. Vestibulum in ultricies sem. Proin quis quam blandit, fermentum urna quis, iaculis eros. Vestibulum ut eros mi. Quisque sit amet nibh in nunc porttitor luctus id in sapien. Morbi at purus a massa facilisis convallis ut ut metus. Curabitur eget tortor lobortis, rhoncus orci ut, vestibulum tellus. Suspendisse tempor nec nibh sed interdum. Etiam pulvinar, ante vitae pulvinar convallis, tellus libero facilisis leo, eu sollicitudin ipsum lorem sit amet eros. Sed eu tempor sem. Suspendisse potenti. Maecenas at condimentum ante."

const otherHeadings = ['Day 1', 'Day 2'];
const otherContent = ['Nulla in orci ullamcorper, tincidunt eros in, fermentum orci. Aliquam aliquam scelerisque ullamcorper. Proin tempor ut urna eget convallis. Etiam tempus nibh rutrum nisi mattis, aliquam finibus mauris sagittis. Cras hendrerit euismod convallis. Aliquam iaculis pellentesque est viverra molestie. Mauris nec aliquet est.Cras cursus est nisl, a eleifend ipsum malesuada nec. Donec et tempus ex, vitae fermentum tellus. In fermentum pharetra eleifend. Mauris ac ipsum iaculis, vulputate purus placerat, pellentesque velit. Curabitur eu lectus tempus, ullamcorper nunc vel, hendrerit nunc. Aliquam congue non elit sed congue. Aliquam lacinia aliquam faucibus. Praesent purus erat, venenatis at efficitur ac, ultricies et nibh. Curabitur elementum vel dolor a consequat. In ut nunc metus. Cras vitae augue sit amet urna venenatis ornare. Ut at nisl vel erat euismod tempus. Donec eget velit sed mauris fermentum viverra. Donec vitae libero sed orci molestie auctor. Phasellus eu dolor nisi. Praesent efficitur nulla leo, et pellentesque lectus sodales eget.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus ligula arcu, tincidunt eget consectetur sagittis, auctor sed ante. Praesent lobortis nisi erat, feugiat tincidunt velit luctus et. Sed iaculis ipsum nec magna consequat, quis malesuada elit consectetur. Mauris efficitur consequat efficitur. Vivamus eu nulla leo. Suspendisse dapibus laoreet nunc, in pellentesque risus efficitur id. Etiam vehicula consequat massa, eget sagittis nisl commodo sit amet. Phasellus tempus in ante non egestas. Ut fermentum odio risus, a rhoncus tortor consectetur eu. Praesent vel risus neque. Praesent cursus lorem vel leo tristique, vel iaculis justo commodo.Suspendisse dictum viverra molestie. Duis tempor pellentesque elit et porttitor. Pellentesque porta congue magna, sed consequat ligula rutrum ac. Integer ut nunc quis tortor porttitor dictum eget venenatis justo. Mauris eu ornare dolor, id posuere lorem. Donec nec pulvinar justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, tincidunt sit amet urna a, porttitor hendrerit quam. Pellentesque lacus diam, viverra eu orci nec, posuere ultricies dui. Nullam in mi ex. Sed lobortis nisl a magna dapibus mattis. Duis dapibus est nec ante pretium, sit amet mollis libero viverra. Nullam placerat sed est quis pharetra. Nulla aliquam.',
  'Donec rhoncus dapibus viverra. Ut velit ligula, tempor eu erat eleifend, bibendum dapibus sapien. Proin ex mi, iaculis sit amet egestas eu, pretium id velit. Phasellus a rutrum ante. Vestibulum mollis urna augue, quis interdum elit semper in. Fusce tristique scelerisque sollicitudin. Aenean commodo odio at neque dictum, sagittis porttitor libero placerat. Donec consequat ut leo placerat sodales. Vestibulum vitae metus sed magna ultrices lacinia quis ac erat. Duis lobortis rhoncus enim, malesuada imperdiet neque feugiat non. Donec id consequat libero. Maecenas velit dui, porttitor at elementum nec, venenatis non nisi. Maecenas luctus lectus diam, id ornare nulla porta non.Pellentesque aliquam imperdiet ex, faucibus sollicitudin risus eleifend vel. Vivamus vitae ultrices felis, ut tincidunt purus. Suspendisse condimentum ipsum non tristique vulputate. Aliquam fermentum arcu dignissim metus pellentesque vulputate. Donec rhoncus orci eget efficitur feugiat. Proin finibus magna in ultrices ornare. Curabitur sollicitudin, nulla sit amet dignissim tincidunt, augue magna condimentum mi, vitae vulputate elit justo eu ex. Morbi sit amet ornare elit, nec vehicula mauris. Nam blandit nunc id justo vulputate, tristique cursus nunc ornare. Donec vulputate viverra nisi, nec semper velit tincidunt a. Aliquam pharetra tellus vel urna dapibus, vitae imperdiet risus rutrum.Nam congue tristique efficitur. In at metus eu sapien congue semper et nec dolor. Praesent feugiat diam at leo cursus posuere. Maecenas vel justo porttitor, placerat nisl sit amet, consequat risus. Proin mattis, quam eu egestas tincidunt, risus massa porta nibh, in lobortis augue lacus eget nisl. Cras blandit consequat purus, facilisis pharetra justo rutrum eu. Vivamus varius egestas est et venenatis.Maecenas pulvinar cursus nulla at faucibus. In feugiat libero nunc, facilisis laoreet dui suscipit in. Proin nec mauris ultricies, bibendum neque in, consequat velit. Proin semper metus sed mi cursus varius. Vestibulum dapibus diam vel ultricies luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis, magna in varius pharetra, magna felis porttitor enim, vel mattis diam erat ut nibh. Integer a quam non tellus venenatis ornare et sed diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla fermentum, lorem eu pretium tincidunt, leo.'
]

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('index', {
    homeTitle: firstHeading,
    homeContent: firstContent,
    headingss: otherHeadings,
    contentss: otherContent
  });
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/contact', function(req, res) {
  res.render('contact');
});



app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
