import logo from './logo.svg';
import './App.css';
import CryptoJS from 'crypto-js'

function App() {

  const salt = CryptoJS.lib.WordArray.random(128 / 8);

  const start = "mark_start";
	const mark1 = "mark1";
	const mark2 = "mark2";
	const mark3 = "mark3";
	const mark4 = "mark4";

  performance.mark(start)
  CryptoJS.PBKDF2("Secret Passphrase", salt, {
    keySize: 128 / 32
  });
  performance.mark(mark1)
  CryptoJS.PBKDF2("Secret Passphrase", salt, {
    keySize: 256 / 32
  });
  performance.mark(mark2)
  CryptoJS.PBKDF2("Secret Passphrase", salt, {
    keySize: 512 / 32
  });
  performance.mark(mark3)
  CryptoJS.PBKDF2("Secret Passphrase", salt, {
    keySize: 512 / 32,
    iterations: 1000
  });
  performance.mark(mark4)

  performance.measure("measure from start to 1",start, mark1);
  performance.measure("measure from 1 to 2", mark1, mark2);
  performance.measure("measure from 2 to 3", mark2, mark3);
  performance.measure("measure from 3 to 4", mark3, mark4);
  const speedSum = performance.getEntriesByType("measure")
  console.log(speedSum);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          speed values: {JSON.stringify(speedSum)}
        </p>
      </header>
    </div>
  );
}

export default App;
