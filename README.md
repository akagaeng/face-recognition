# face-recognition
face recognition app using opencv(opencv4nodejs), nodejs

## To-do
- [x] install opencv4nodejs
- [ ] take photo using [webrtc](https://webrtc.org/start/)
- [ ] face detection
  + request photos and return detected faces in response
- [ ] save photo with name(label)
- [ ] training saved photos with label index
- [ ] recognize face

## Install opencv4nodejs on Mac OS

### install Command Line Tools (CLT) for Xcode
```bash
$ xcode-select --install
```

### install [Homebrew](https://brew.sh/)
```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### install opencv
```bash
$ brew install opencv
```

### install opencv4nodejs
```bash
$ npm install opencv4nodejs --save
```