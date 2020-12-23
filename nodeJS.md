# What a Node.JS!!!

### 현재까지 Node.JS에 대한 이해

- Node.JS가 설치되어 있어야 JS 코드를 해석(?)할 수 있다.

- 브라우저 이외, CLI를 통해서 실행할 수 있다.

## IDE?

- **Intergrated Development Environment, IDE**

- 통합 개발 환경

### IDE의 종류?

- JS

  - WebStorm(JetBrains)

- Python
  - Pycham

## VScode-Node.JS Debugging

### 시작

- [x] **Extension이 존재하지만 기본적으로 **great debugging**을 support한다고 함**
- [ ] **Let's Start debugging**
- 학습 과정을 커밋해보고 싶어서 일단 git init을 함
- 2차 면접때 git때문에 당황해서 고생한 기억이 떠오름
- git이 어렵게 느껴져서 유튜브 강의를 한 번 더 보면서 따라해 보기로 함
- 나의 shell은 현재 branch도 안나오고, 심지어 예쁘지도 않음
- 영상에서 mac을 사용중이고, zsh라는걸 사용하고 있음
- [x] **Google에서 영어로 검색: zsh**
- on-my-zsh까지 설치가 되는 게시물 발견
- wsl ubunto설치
- zsh > oh-my-zsh 설치
- 뜻하지 않게 cmd, bash와 함께 반나절을 보내며 zsh를 VSCode의 기본 shell로 설정
  - ~/.bashrc
  - ~/.zshrc
  - rc가 설정파일인걸 알게됨
- vi 사용법이 검색됐고, vim의 존재에 대해 알게됨
  - 마우스가 없이도 조작이 가능하다(?)
- [x] **다시 debugging 연습 시작**
- zsh에서 command not found가 뜸
- 기존에 node.js가 설치되어 있어서 path에 문제가 있었던걸로 검색됨
- 단축키 같은걸로 설정하는 방식으로 해결
- [x] **다시 도전**
- err = this.\_handle.open(fd) 오류
  [결정적으로 해결의 실마리를 발견한 글](https://github.com/microsoft/vscode-remote-release/issues/1420)
- wsl환경에서 일어나는 문제로 보임
- 마소에서 해결책으로 code-insiders를 마련해준것으로 이해
- VSCode-insiders 설치
- 이유는 모르겠으나 문제가 해결이 됨
- VSCode와 환경이 약간 달라서 불안하기도 하고, 설정을 그대로 가져오고 싶음
- 다시 구글링
- **setting sync** 발견
- **gist**라는걸 만남
- 설정 그대로 가져오기 성공
- 이제서야 공식doc에서 설명하는대로 debugging모드가 작동이 됨
  - 그런데 insiders가 아닌 VSCode에서도 갑자기 작동이 됨
