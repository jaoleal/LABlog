import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:lablogfrontend/components/colors/colors.dart';

class CommonText extends StatelessWidget {
  const CommonText({super.key, required this.text});
  final text;
  @override
  Widget build(BuildContext context) {
    return Flexible(
        child: Text(
      text,
    ));
  }
}

class TittleText extends StatelessWidget {
  final String text;
  final Color? color;
  const TittleText({super.key, required this.text, this.color});

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
    );
  }
}
