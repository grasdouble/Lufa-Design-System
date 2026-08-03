# CLI Reference

## `theme-validate`

```
lufa-ds-cli theme-validate [theme-file] [options]

Arguments:
  theme-file                   Path to the theme CSS file to validate

Options:
  --a11y                       Run WCAG AA contrast check only
  --format                     Run format check only
  --completeness               Run completeness check only
  -d, --dir <directory>        Validate all *.css files in a directory
  --level <level>              Completeness level: starter (default), extended, advanced
  -V, --version                Output the version number
  -h, --help                   Display help for command
```

When no option is passed, all three checks run (completeness + format + a11y).
Options `--a11y`, `--format`, and `--completeness` are mutually exclusive.
Provide either `theme-file` or `--dir`, never both. Directory files are
validated in deterministic file-name order.

## `theme-template`

```
lufa-ds-cli theme-template [level] [options]

Arguments:
  level                        Template level: starter (default), extended, advanced

Options:
  -o, --output-name <name>     Output file name without the .css extension
                               Prompted only when stdin is an interactive TTY
  -f, --force                  Overwrite an existing output file
  -h, --help                   Display help for command
```

Output names are restricted to a single safe file-name segment without
whitespace or a `.css` extension. Existing files are never overwritten unless
`--force` is provided.
