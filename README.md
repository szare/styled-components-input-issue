This is a sample for the Styled input field stops accepting additional characters after typing just a single character #143.
#143[https://github.com/styled-components/styled-components/issues/143]
If you relocate the ```InputNumeric``` defination to outside the render section, it will working.

Note: this issue does not related to the ```focus``` property. You can set the ```autoFocus``` like the following, but the issue will be remain:
```
      <InputNumeric
        autoFocus
        {...props} onChange={this.onChange}
        />
        ```
