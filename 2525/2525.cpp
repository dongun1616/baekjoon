#include <iostream>

using namespace std;
int main()
{
    int H, M, NeedM;

    cin >> H >> M >> NeedM;

    H += NeedM / 60;
    M += NeedM % 60;

    if (M > 59)
    {
        H += 1;
        M -= 60;
    }
    if(H > 23)
    {
        H -= 24;
    }
     
    cout << H << " " << M;

    return 0;
}