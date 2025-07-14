import click
import os
from dotenv import load_dotenv
from metatrader_mcp.server import mcp

@click.command()
@click.option("--login", required=True, type=int, help="MT5 login ID")
@click.option("--password", required=True, help="MT5 password")
@click.option("--server", required=True, help="MT5 server name")
def main(login, password, server):
    """Launch the MetaTrader MCP STDIO server."""
    load_dotenv()
    # override env vars if provided via CLI
    os.environ["login"] = str(login)
    os.environ["password"] = password
    os.environ["server"] = server
    # run STDIO transport
    mcp.run(transport="stdio")

if __name__ == "__main__":
    # pylint: disable=no-value-for-parameter
    main()
