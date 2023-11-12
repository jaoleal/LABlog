import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:lablogfrontend/components/logo.dart';
import 'package:lablogfrontend/constvalues.dart';

class Header extends StatelessWidget {
  const Header({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: double.infinity,
      color: lightblue,
      child: SizedBox(
        width: double.infinity,
        height: 200.h,
        child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Padding(
                padding: EdgeInsets.symmetric(vertical: 5),
                child: logo(400.h),
              ),
            ]),
      ),
    );
  }
}
