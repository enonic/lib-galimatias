package com.enonic.galimatias;


import io.mola.galimatias.GalimatiasParseException;


public class URL {
  public io.mola.galimatias.URL parse(String input)
    throws GalimatiasParseException {
      return io.mola.galimatias.URL.parse(input);
    }

  public io.mola.galimatias.URL normalize(io.mola.galimatias.URL input)
    throws GalimatiasParseException {
      //return new io.mola.galimatias.canonicalize.CombinedCanonicalizer().canonicalize(input);
      //return new io.mola.galimatias.canonicalize.DecodeUnreservedCanonicalizer().canonicalize(input);
      //return new io.mola.galimatias.canonicalize.RegexCanonicalizer(RegexCanonicalizer.Scope scope, Pattern pattern, String substitution).canonicalize(input);
      //return new io.mola.galimatias.canonicalize.RFC2396Canonicalizer().canonicalize(input);
      return new io.mola.galimatias.canonicalize.RFC3986Canonicalizer().canonicalize(input);
      //return new io.mola.galimatias.canonicalize.StripPartCanonicalizer(StripPartCanonicalizer.Part part).canonicalize(input);
    }
} // public class URL
