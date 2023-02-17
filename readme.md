# GenToken
GenToken is a pseudo-random string token generator.
package-less, it using no one external package.

# Install
```bash
npm i shaynlink/gentoken
```

# Usage

Javascript
```javascript
// commonJS
const {generateToken} = require('@shaynlink/gentoken');
// const generateToken = require('@shaynlink/gentoken').default;

const generator = generateToken();

const token = generator.next().value;

// ecmaScript
import generateToken from '@shaynlink/gentoken';

const generator = generateToken();

const token = generator.next().value;
```

Typescript
```typescript
import generateToken from '@shaynlink/gentoken';

const generator: IterableIterator<string> = generateToken();

const token: string = generator.next().value;
```

# License
MIT License

Copyright (c) 2022 shaynlink

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
