var markdownpdf = require("markdown-pdf")

// list book
var mdDocs = ["amount.md", "consensusstakeholder.md", "organizerdriversbadger.md", "blockconfirmations.md",
    "consensusvote.md", "organizerdriversbolt.md", "block.md", "consensusvotingsystem.md", "organizerdrivers.md",
    "botx.md", "core.md", "organizerdriversristretto.md", "cliattestant.md", "encodinggen.md", "organizer.md",
    "clibotmanagement.md", "encodingkeyvalue.md", "rpc.md", "clibot.md", "encodinglist.md",
    "sharedhash.md", "clidump.md", "encoding.md", "shared.md", "cligenchain.md", "internalcheck.md",
    "sharedrpcshell.md", "cligenedit.md", "internalrunners.md", "shell.md", "cli.md", "merkle.md",
    "signer.md", "clirhz.md", "metricsbackend.md", "signersign.md", "clirhznode.md",
    "metricsbackendprometheus.md", "signertransaction.md", "config.md", "metricscollector.md", "signerutil.md",
    "consensuscriteria.md", "metrics.md", "smartcontract.md", "consensusdelegate.md", "network.md", "state.md",
    "consensusinfo.md", "networkmessage.md", "transaction.md", "consensusround.md", "networkpubsub.md", "wallet.md"]

// paths outputs and inputs
var bookPath = "out/book.pdf",
    pathOfMd = "/home/thiagozs/workspace/rhizom-docs/docs/"

// insert path of source mds
mdDocs.forEach(function (part, index) {
    mdDocs[index] = `${pathOfMd}${part}`;
});

console.log(mdDocs)

// create a book maps
markdownpdf().concat.from(mdDocs).to(bookPath, function () {
    console.log("Created", bookPath)
})