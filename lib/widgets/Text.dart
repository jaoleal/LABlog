import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:lablogfrontend/constvalues.dart';

class CommonText extends StatelessWidget {
  const CommonText({super.key, required this.entrytext});
  final entrytext;
  @override
  Widget build(BuildContext context) {
    return Flexible(
        child: Text(
      entrytext,
      style: TextStyle(
        fontSize: 25,
        fontWeight: FontWeight.bold,
        color: Colors.black,
        fontFamily: 'SourceCodePro',
      ),
    ));
  }
}
